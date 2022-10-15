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
          <h4 class="mb-3">Tallas</h4>
          <v-row>
            <v-col
              v-for="variation of availableVariations"
              :key="variation.id"
            >
              <v-checkbox
                :label="getVariationLabel(variation)"
                v-model="selectedVariations"
                :value="variation.id"
                hide-details
              />
            </v-col>
          </v-row>
          <v-row class="mb-3">
            <v-col>
              <v-btn @click="handleSelectAllVariations">Seleccionar Todas</v-btn>
            </v-col>
          </v-row>

          <h4 class="mb-3">Copiar respuestas</h4>
          <v-row>
            <v-col>
              <v-btn rounded>Url</v-btn>
            </v-col>
            <v-col>
              <v-btn rounded>Precio</v-btn>
            </v-col>
            <v-col>
              <v-btn rounded>Imagen</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn block>COPIAR TODO</v-btn>
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
const selected = ref(null);
const search = ref("");
const items = ref([]);
const selectedVariations = ref([])

const availableVariations = computed(() => {
  if (!selected.value) return [];

  return getAvailableVariations(selected.value);
});

const handleSelectAllVariations = () => {
  selectedVariations.value = availableVariations.value.map(variation => variation.id)
}

const getVariationLabel = (variation) => {
  const talla = variation.attributes.talla.option;
  const color = variation.attributes?.color?.option;

  if (color) {
    return `${talla} - ${color}`;
  }

  return talla;
};

const getAvailableVariations = (product) => {
  let variations = [];

  for (const variation of product.variations) {
    const available =
      variation.status === "publish" &&
      variation.stock_status === "instock" &&
      variation.attributes;

    if (available) {
      variations.push({
        ...variation,
        attributes: getFormatAttributes(variation.attributes),
      });
    }
  }

  return variations;
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
