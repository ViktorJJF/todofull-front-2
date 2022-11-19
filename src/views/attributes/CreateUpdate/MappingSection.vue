<script setup lang="ts">
import { ref } from "vue";
import type { Marketplace } from "@/types/marketplace";
import marketplacseService from "@/services/api/marketplaces";
import MercadolibreAttributesSelect from "@/components/marketplacesMapping/MercadolibreAttributesSelect.vue";

const props = defineProps<{
  category: string;
}>();

const marketplaces = ref<Marketplace[]>([]);

marketplacseService
  .list()
  .then((res) => (marketplaces.value = res.data.payload));
</script>

<template>
  <v-row v-for="marketplace of marketplaces">
    <v-col>
      {{ marketplace.name }}
      <MercadolibreAttributesSelect
        v-if="marketplace.type === 'mercadolibre'"
        :marketplace="marketplace"
        :category="category"
        variant="outlined"
        density="compact"
        hide-details
        clearable
        placeholder="Seleccion un atributo"
      />
    </v-col>
  </v-row>
</template>
