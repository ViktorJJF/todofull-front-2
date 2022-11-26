<script setup lang="ts">
import { ref, watch, useAttrs } from "vue";
import type { Marketplace } from "@/types/marketplace";
import marketplacesService from "@/services/api/marketplaces";

const attrs = useAttrs();

const props = defineProps<{
  modelValue: String,
  marketplace: Marketplace;
  category: string;
}>();

const emits = defineEmits<{
  (e: "update:model-value", payload: string): void
}>();

const attributes = ref([]);

const fetchAttributes = async () => {
  const res = await marketplacesService.listCategoryAttributes(
    props.marketplace._id,
    props.category
  );

  attributes.value = res.data.payload;
};

const handleChange = (id: string) => {
  emits("update:model-value", id)
}

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
    :modelValue="modelValue"
    @update:model-value="handleChange"
  />
</template>
