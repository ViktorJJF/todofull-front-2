<script setup lang="ts">
import { ref } from "vue";
import marketplacesApi from "@/services/api/marketplaces";
import categoriesApi from "@/services/api/categories";
import type { Marketplace } from "@/types/marketplace";
import type { CategoryItem } from "./CategoriesTree/types/categoryItem";
import _ from "lodash";

defineProps<{
  item: CategoryItem;
}>();

const marketplaces = ref<Marketplace[]>([]);
const categories = ref(null);

marketplacesApi.list().then((res) => {
  marketplaces.value = res.data.payload;
});

categoriesApi.listByMarketplaces().then((res) => {
  categories.value = _.groupBy(res.data.payload, "marketplaceId");
});
</script>

<template>
  <v-card v-if="categories">
    <v-card-title>{{ item.name }}</v-card-title>
    <v-card-text v-for="marketplace of marketplaces">
      {{ marketplace.name }}
      <v-text-field
        v-if="marketplace.type === 'woocommerce'"
        variant="outlined"
        density="compact"
        hide-details
      />
      <v-select
        v-else-if="marketplace.type === 'mercadolibre'"
        :items="categories[marketplace._id]"
        item-value="id"
        item-title="name"
        density="compact"
        variant="outlined"
        hide-details
      />
      <v-text-field
        v-else-if="marketplace.type === 'sellercenter'"
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn>Guardar</v-btn>
    </v-card-actions>
  </v-card>
</template>
