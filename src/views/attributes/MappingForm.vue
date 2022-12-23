<script setup lang="ts">
import type { AttributeTerm } from "@/types/attributeTerm";
import type { Marketplace } from "@/types/marketplace";
import type { Attribute } from "@/types/attribute";
import marketplacseService from "@/services/api/marketplaces";
import { ref } from "vue";
import MercadolibreAttributesTermSelect from "@/components/marketplacesMapping/MercadolibreAttributesTermSelect.vue";

defineProps<{
  attribute: Attribute;
  term: AttributeTerm;
}>();

const marketplaces = ref<Marketplace[]>([]);

marketplacseService
  .list()
  .then((res) => (marketplaces.value = res.data.payload));

const handleSubmit = () => {
  console.log("submit");
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <v-card>
      <v-card-title>Mapeo de Terminos</v-card-title>
      <v-card-text>
        <v-row v-for="marketplace of marketplaces">
          <v-col>
            {{ marketplace.name }}
            <MercadolibreAttributesTermSelect
              v-if="marketplace.type === 'mercadolibre'"
              :marketplace="marketplace"
              :categories="attribute.categories"
              :attribute="attribute.mercadolibre"
              v-model="term.mercadolibre"
              variant="outlined"
              density="compact"
              hide-details
              clearable
              placeholder="Selecciona un término"
            />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn type="submit">Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </form>
</template>
