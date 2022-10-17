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
          cache-items
          item-title="name"
          item-value="_id"
          no-filter
          hide-no-data
          hide-details
          outlined
          clearable
          label="Consultar producto"
          placeholder="Buscar por nombre o referencia"
          prepend-icon="mdi-database-search"
          return-object
        ></v-autocomplete>
      </div>

      <v-divider></v-divider>

      <v-expand-transition>
        <div v-if="selected" class="py-4">
          <h4 class="mb-3" v-if="availableVariations.length">Tallas</h4>
          <v-row>
            <v-col v-for="variation of availableVariations" :key="variation.id" cols="3">
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
            <v-col>
              <v-btn @click="handleCopyAnswer('url')">Url</v-btn>
            </v-col>
            <v-col>
              <v-btn @click="handleCopyAnswer('price')">Precio</v-btn>
            </v-col>
            <v-col>
              <v-btn
                @click="handleCopyAnswer('image')"
                :disabled="!selected.customImages[0]"
                >Imagen</v-btn
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                block
                @click="handleCopyAnswer('all')"
                :disabled="!selectedVariations.length"
              >
                Copiar Todo
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import ecommercesApi from "@/services/api/ecommerces";
import { useChatSidebarStore } from "@/stores/chatSidebar";
import { ref, watch, computed } from "vue";

const chatSidebar = useChatSidebarStore();
const isLoading = ref(false);
const search = ref("");
const items = ref([]);
const selected = ref(null);
const selectedVariations = ref([]);

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

const handleCopyAnswer = (type: string = "all") => {
  const message = getMessage(type);
  navigator.clipboard.writeText(message).then(() => {
    alert(`Mensaje copiado al portapapeles: ${message}`);
  });
};

const getMessage = (type: string) => {
  const ref = selected.value.ref || selected.value.sku.split("-")[0];
  const size = selectedVariations.value?.map((variation) => variation.label);
  const utmParams = `utm_content=roge&utm_medium=chattf&utm_source=IG-BOT`;
  const baseUrl = selected.value.permalink;
  const fullUrl = `${baseUrl}${baseUrl.endsWith("/") ? "" : "/"}?${utmParams}`;
  const price = new Intl.NumberFormat().format(
    selected.value.variations[0].regular_price
  );

  const args = [ref];

  if (type === "size") args.push(size);
  if (type === "url") args.push(fullUrl);
  if (type === "price") args.push(price);
  if (type === "all") args.push(size, price, fullUrl);
  if (type === "image") {
    return selected.value.customImages[0];
  }

  return messages[`answers.${type}`](...args)
};

const messages = {
  "answers.no-size": (ref) =>
    `Lamentablemente no tenemos esta talla en la ref: ${ref}`,
  "answers.size": (ref: string, size: string[]) => {
    if (size.length === 1) {
      return `Si tenemos disponible la ref: ${ref} en talla ${size[0]}`;
    }

    return `En la ref: ${ref}, tenemos disponibes las tallas: ${size.join(
      ", "
    )}`;
  },
  "answers.url": (ref, url) =>
    `En el siguiente vinculo puedes tener toda la información y comprar la ref: ${ref} ${url}`,
  "answers.price": (ref, price) => `El valor de la ref: ${ref} es de ${price}`,
  "answers.all": (ref, size: string[], price, url) => {
    if (size.length) {
      return `En la ref: ${ref}, tenemos disponibles las tallas: ${size.join(
        ", "
      )},
      su valor es de ${price} y puedes adquirirla en ${url}`;
    }

    return `Si tenemos disponible la ref ${ref} en tall ${size[0]}, su valor es de ${price} y puedes adquirirla en ${url}`;
  },
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
  isLoading.value = true;

  const query = {
    limit: 10,
    filter: search.value,
    fields: ["name", "ref"].join(","),
  };

  const res = await ecommercesApi.list(query);

  items.value = res.data.payload;
  isLoading.value = false;
};

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
