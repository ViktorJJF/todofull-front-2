<script setup lang="ts">
import { ref, watch, useAttrs } from "vue";
import type { Marketplace } from "@/src/types/marketplace";
import marketplacesService from "@/services/api/marketplaces";

const attrs = useAttrs();

const props = defineProps<{
  marketplace: Marketplace;
  category: string;
}>();

const attributes = ref([]);

const fetchAttributes = async () => {
  const res = await marketplacesService.listCategoryAttributes(
    props.marketplace._id,
    props.category
  );

  attributes.value = res.data.payload;
};

watch(
  () => props.category,
  () => {
    fetchAttributes();
  },
  { immediate: true }
);
</script>

<template>
  <v-select
    :items="attributes"
    item-title="name"
    item-value="id"
    v-bind="attrs"
  />
</template>
