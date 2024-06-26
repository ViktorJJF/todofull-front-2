<template>
  <v-navigation-drawer
    app
    temporary
    elevation="10"
    location="right"
    v-model="chatSidebar.sidebarDrawer"
    width="400"
  >
    <div class="px-4">
      <div class="py-4">
        <h3>TODO BOT</h3>
      </div>
      <v-divider></v-divider>

      <div class="py-4">
        <v-autocomplete
          :items="items"
          v-model="selected"
          v-model:search="search"
          :loading="isLoading"
          autofocus
          cache-items
          item-title="name"
          item-value="_id"
          no-filter
          hide-no-data
          hide-details
          outlined
          clearable
          :menu-props="{ location: 'bottom end' }"
          label="Consultar producto"
          placeholder="Buscar por nombre o referencia"
          prepend-icon="mdi-database-search"
          return-object
        />
      </div>

      <v-divider></v-divider>

      <v-expand-transition>
        <div v-if="selected" class="py-4">
          <h4 class="mb-3" v-if="availableVariations.length">Tallas</h4>
          <v-row>
            <v-col
              v-for="variation of availableVariations"
              :key="variation.id"
              style="padding: 0"
              cols="4"
            >
              <v-checkbox
                :label="variation.label"
                v-model="selectedVariations"
                :value="variation"
                hide-details
              />
            </v-col>
          </v-row>
          <v-row class="mb-3" v-if="availableVariations.length">
            <v-col>
              <v-btn variant="outlined" @click="handleSelectAllVariations"
                >Seleccionar Todas</v-btn
              >
            </v-col>
            <v-col>
              <v-btn variant="outlined" @click="handleClearVariations"
                >Limpiar Selección</v-btn
              >
            </v-col>
          </v-row>
          <h4 class="mb-3">Copiar respuestas</h4>
          <v-row class="mb-3">
            <v-col>
              <v-btn
                v-if="availableVariations.length"
                :disabled="!selectedVariations.length"
                color="success"
                class="mb-2"
                block
                @click="handleCopyAnswer('size')"
              >
                Tallas Seleccionadas
              </v-btn>
              <v-btn color="error" block @click="handleCopyAnswer('no-size')">
                No hay tallas disponibles
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="mb-3">
            <v-col :cols="3">
              <v-btn @click="handleCopyAnswer('url')">Url</v-btn>
            </v-col>
            <v-col :cols="3">
              <v-btn @click="handleCopyAnswer('price')">Precio</v-btn>
            </v-col>
            <v-col :cols="3">
              <v-btn
                @click="sendImageToChat(selected.multimedia[0].url)"
                :disabled="!selected.multimedia.length"
                >Imagen</v-btn
              >
            </v-col>
            <v-col :cols="3">
              <v-btn
                v-if="
                  selected.multimedia.find((media) => media.url.includes('youtube'))
                "
                @click="handleCopyAnswer('youtube')"
                :disabled="!selected.multimedia.length"
                >Youtube</v-btn
              >
            </v-col>
          </v-row>
          <v-row class="mb-3">
            <v-col :cols="12">
              <v-btn
                class="mb-2"
                block
                @click="copyAnswersAndSend('all')"
                :disabled="!selectedVariations.length"
              >
                Copiar y Enviar
              </v-btn>
            </v-col>
            <v-col :cols="6">
              <v-btn
                block
                @click="handleCopyAnswer('all')"
                :disabled="!selectedVariations.length"
              >
                Copiar Todo
              </v-btn>
            </v-col>
            <v-col :cols="6">
              <v-btn
                block
                @click="handleCopyAnswer('mayor')"
                :disabled="!selectedVariations.length"
              >
                X MAYOR
              </v-btn>
            </v-col>
            <v-snackbar v-model="clipboardNotification" color="success">
              Se ha copiado mensaje al portapapeles!
            </v-snackbar>
          </v-row>
          <v-row>
            <v-col>
              <v-img :src="selected.multimedia[0].url" />
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import messages from "./messages";
import chatsApi from "@/services/api/chats";
import ecommercesApi from "@/services/api/ecommerces";
import { useChatSidebarStore } from "@/stores/chatSidebar";
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
import {
  sendMessage,
  addTodofullLabelsByChildren,
  getExpiryDateTime,
} from "@/utils/utils";

const isLoading = ref(false);
const search = ref("");
const items = ref([]);
const selected = ref(null);
const selectedVariations = ref([]);
const clipboardNotification = ref(false);

const chatSidebar = useChatSidebarStore();
const store = useStore();

const user = computed(() => store.state.authModule.user);

const availableVariations = computed(() => {
  if (!selected.value) return [];
  return getAvailableVariations(selected.value);
});

const handleSelectAllVariations = () => {
  selectedVariations.value = availableVariations.value;
};

const handleClearVariations = () => {
  selectedVariations.value = [];
};

const handleCopyAnswer = async (type: string = "all") => {
  getMessage(type).then((message) => {
    console.log(message);
    navigator.clipboard.writeText(message).then(() => {
      clipboardNotification.value = true;
      store.state.chatsModule.hasPendingNegotiationStatus = true;
    });
  });
  const categoriesIds = selected.value.categories.map((el) => el._id);
  await addTodofullLabelsByChildren(categoriesIds);
};

const copyAnswersAndSend = (type: string = "all") => {
  getMessage(type).then(async (message) => {
    const categoriesIds = selected.value.categories.map((el) => el._id);
    await addTodofullLabelsByChildren(categoriesIds);
    sendMessage(message, "Agente");
    chatSidebar.SET_SIDEBAR_DRAWER();
    store.commit(
      "chatsModule/updateHasToUpdateSelectedChat",
      !store.state.chatsModule.hasToUpdateSelectedChat
    );
  });
};

const buildUrl = async () => {
  const utmSource = chatSidebar.bot?.name.split(" ")[0] || "";
  const utmContent = user.value.alias || user.value.first_name;
  const utmParams = `utm_content=${utmContent}&utm_medium=chattf&utm_source=${utmSource}`;
  const baseUrl = selected.value.permalink;
  const fullUrl = `${baseUrl}${baseUrl.endsWith("/") ? "" : "/"}?${utmParams}`;
  const expiry = new Date();
  expiry.setMonth(expiry.getMonth() + 2); // expires in 2 months
  const dto = {
    url: fullUrl,
    expiry: getExpiryDateTime(expiry),
    metatitle: selected.value.name,
    metadescription: selected.value.categories[0]
      ? selected.value.categories[0].name
      : null,
  };
  const res = await chatsApi.shortenLink(dto);
  return res.data.payload.shorturl;
};

const getMessage = async (type: string) => {
  const ref = selected.value.ref || selected.value.sku.split("-")[0];
  const size = selectedVariations.value?.map((variation) => variation.label);
  const firstVariation = selected.value.variations[0]
  const price = new Intl.NumberFormat().format(
    firstVariation.sale_price ?? firstVariation.regular_price
  );

  const url = ["url", "all", "mayor"].includes(type) ? await buildUrl() : "";

  const args = [ref];

  const featuredImagesIndexes = selected.value.featured_images?.map(el => el.index);
  const featuredImages = selected.value.multimedia.map(media => media.url).filter((_, index) =>
    featuredImagesIndexes?.includes(index)
  );
  const featuredYoutube = featuredImages.find((el) => el.includes("youtube"));

  if (type === "size") args.push(size);
  if (type === "url") args.push(url);
  if (type === "price") args.push(price);
  if (type === "all") args.push(size, price, url);
  if (type === "mayor") args.push(size);
  if (type === "image") {
    return selected.value.multimedia[0].url;
  }
  if (type === "youtube") {
    return featuredYoutube;
  }

  return messages[`answers.${type}`](...args);
};

const getAvailableVariations = (product) => {
  const variations = [];

  for (const variation of product.variations) {
    const available =
      variation.status === "publish" &&
      variation.stock_status === "instock" &&
      variation.attributes;

    if (available) {
      const variationFormatted = {
        ...variation,
        attributes: getFormatAttributes(variation.attributes),
      };

      Object.assign(variationFormatted, {
        label: getVariationLabel(variationFormatted),
      });

      variations.push(variationFormatted);
    }
  }

  return variations;
};

const getVariationLabel = (variation) => {
  const talla = variation.attributes.talla.option;
  const color = variation.attributes?.color?.option;

  if (color) {
    return `${talla} - ${color}`;
  }

  return talla;
};

const getFormatAttributes = (attributes) => {
  return attributes.reduce(
    (attributes, current) => ({
      ...attributes,
      [current.name.toLowerCase()]: current,
    }),
    {}
  );
};

const fetchItems = async () => {
  if (isLoading.value === true) {
    return;
  }

  isLoading.value = true;

  const query = {
    limit: 10,
    filter: search.value,
    country: chatSidebar.bot ? chatSidebar.bot.country : undefined,
    fields: ["name", "ref", "sku"].join(","),
  };

  const res = await ecommercesApi.list(query);

  items.value = res.data.payload;
  isLoading.value = false;
};

const sendImageToChat = async (url) => {
  sendMessage("", "Agente", "image", { url });
  chatSidebar.SET_SIDEBAR_DRAWER();
  store.commit(
    "chatsModule/updateHasToUpdateSelectedChat",
    !store.state.chatsModule.hasToUpdateSelectedChat
  );
  const categoriesIds = selected.value.categories.map((el) => el._id);
  await addTodofullLabelsByChildren(categoriesIds);
};

watch(selected, (selected) => {
  if (!selected) {
    selectedVariations.value = [];
  }
});

watch(search, (search) => {
  if (search && search !== selected.value?._id) {
    fetchItems();
  }
});
</script>

<style lang="scss">
.v-application .v-item-group .v-avatar--density-default {
  border: 1px solid rgb(0, 0, 0, 0.1) !important;
}
.v-application .v-item-group .v-sidebar_active {
  border: 2px solid black !important;
}
</style>
