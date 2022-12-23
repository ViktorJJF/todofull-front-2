<script setup lang="ts">
import { ref, useAttrs } from "vue";
import type { Marketplace } from "@/types/marketplace";
import marketplacesService from "@/services/api/marketplaces";

const attrs = useAttrs();

const props = defineProps<{
  modelValue?: String;
  marketplace: Marketplace;
  categories: String[];
  attribute: String;
}>();

const emits = defineEmits<{
  (e: "update:model-value", paload: String): void
}>();

const terms = ref([]);

const fethTerms = async () => {
  const res = await marketplacesService.listCategoryAttributes(
    props.marketplace._id,
    props.categories[0]
  );

  const attributes = res.data.payload;
  const attribute = attributes.find((v) => v.id === props.attribute);

  if (attribute && attribute.values) {
    terms.value = terms.value = attribute.values;
  }
};

fethTerms();

const handleChange = (id: String) => {
  emits("update:model-value", id)
}
</script>

<template>
  <v-select
    :items="terms"
    item-title="name"
    item-value="id"
    v-bind="attrs"
    :modelValue="modelValue"
    @update:model-value="handleChange"
  />
</template>
