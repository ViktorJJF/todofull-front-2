<script setup lang="ts">
import { ref } from "vue";
import marketplacesApi from "@/services/api/marketplaces";
import type { Marketplace } from "@/types/marketplace";
import type { CategoryItem } from "./CategoriesTree/types/categoryItem";
import MercadolibreCategoriesSelect from "@/components/marketplacesMapping/MercadolibreCategoriesSelect.vue";
import SellercenterCategoriesSelect from "@/components/marketplacesMapping/SellercenterCategoriesSelect.vue";

const props = defineProps<{
  item: CategoryItem;
}>();

const emit = defineEmits<{
  (e: "update:item", item: CategoryItem): void;
}>();

const marketplaces = ref<Marketplace[]>([]);
const localItem = ref({ ...props.item });

marketplacesApi.list().then((res) => {
  marketplaces.value = res.data.payload;
});

const handleSubmit = () => {
  emit("update:item", localItem.value);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <v-card>
      <v-card-title>{{ item.name }}</v-card-title>
      <v-card-text>
        <div class="mb-4" v-for="marketplace of marketplaces">
          {{ marketplace.name }}
          <v-text-field
            v-if="marketplace.type === 'woocommerce'"
            variant="outlined"
            density="compact"
            hide-details
          />
          <MercadolibreCategoriesSelect
            v-else-if="marketplace.type === 'mercadolibre'"
            :marketplace="marketplace"
            density="compact"
            variant="outlined"
            hide-details
            clearable
            placeholder="Seleccionar categoría"
            v-model="localItem.mercadolibre"
          />
          <SellercenterCategoriesSelect
            v-if="marketplace.type === 'sellercenter'"
            :marketplace="marketplace"
            variant="outlined"
            density="compact"
            hide-details
            clearable
            placeholder="Seleccionar categoría"
            v-model="localItem.sellercenter"
          />
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn type="submit">Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </form>
</template>
