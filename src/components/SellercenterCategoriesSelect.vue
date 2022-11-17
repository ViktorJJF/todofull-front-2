<script setup lang="ts">
import categoriesApi from "@/services/api/categories";
import { ref, useAttrs, computed, watch } from 'vue';
import type { PropType } from "vue";
import type { Marketplace } from "../types/marketplace";

const attrs = useAttrs()

const props = defineProps({
  modelValue: {
    type: Array as PropType<string[]>
  },
  marketplace: {
    type: Object as PropType<Marketplace>,
    required: true
  },
  parent: {
    type: Object
  },
  level: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', payload: string[]): void
}>()

const rootCategories = ref([]);
const loading = ref(false);

const categories = computed(() => {
  if(props.parent) {
    const categories = props.parent.Children.Category
    return Array.isArray(categories)
      ? categories
      : [categories]
  }

  return rootCategories.value;
})

const selected = computed(() => {
  if(!categories.value.length) return null;

  const id = props.modelValue[props.level]
  return categories.value.find(c => c.CategoryId === id)
})

const fetchCategories = async () => {
  loading.value = true;
  const res = await categoriesApi.listByMarketplaces(props.marketplace._id);
  rootCategories.value = res.data.payload;
  loading.value = false;
}

if(!props.parent) {
  fetchCategories()
}

watch(() => props.parent, () => {
  const modelValue = props.modelValue.slice(0, props.level)
  emit('update:modelValue', modelValue)
})

const handleSelectChange = (val: any) => {
  let modelValue = [...props.modelValue];
  if(val) {
    modelValue[props.level] = val.CategoryId;
  }else {
    modelValue = modelValue.slice(0, props.level)
  }
  emit('update:modelValue', modelValue);
}

const handleInnerChange = (modelValue) => {
  emit('update:modelValue', modelValue)
}
</script>

<template>
  <div :class="{ 'mt-2': parent }">
    <v-select
      :items="categories"
      item-title="Name"
      item-value="CategoryId"
      return-object
      v-bind="attrs"
      :loading="loading"
      :modelValue="selected"
      @update:modelValue="handleSelectChange"
    />
    <SellercenterCategoriesSelect
      v-if="selected && selected.Children"
      :marketplace="marketplace"
      :parent="selected"
      v-bind="attrs"
      :level="level + 1"
      :modelValue="modelValue"
      @update:modelValue="handleInnerChange"
    />
  </div>
</template>
  
<style>

</style>
  