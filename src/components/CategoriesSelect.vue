<script setup lang="ts">
import categoriesApi from "@/services/api/categories";
import { ref, useAttrs, computed, watch } from 'vue';
import type { PropType } from "vue";
import type { Category } from '@/types/category';

const attrs = useAttrs()

const props = defineProps({
  modelValue: {
    type: Array as PropType<string[]>
  },
  parent: {
    type: String,
  },
  level: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', payload: string[]): void
}>()

const categories = ref<Category[]>([]);
const loading = ref(false);

// hide select when there is no more data
const hidden = computed(() => categories.value.length === 0 && loading.value === false)

const selected = computed(() => categories.value.length ? props.modelValue[props.level] : null)

const fetchCategories = async () => {
  loading.value = true
	const query = { parent: props.parent || "" }
	const res = await categoriesApi.list(query)
	categories.value = res.data.payload;
  loading.value = false
}

fetchCategories()

watch(() => props.parent, () => {
  fetchCategories()
  const modelValue = props.modelValue.slice(0, props.level)
  emit('update:modelValue', modelValue)
})

const handleSelectChange = (val: string) => {
  let modelValue = [...props.modelValue];
  if(val) {
    modelValue[props.level] = val;
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
  <div :class="{ 'mt-2': !!parent }">
    <v-select
      v-if="!hidden"
      :items="categories"
      item-title="name"
      item-value="_id"
      v-bind="attrs"
      :loading="loading"
      :modelValue="selected"
      @update:modelValue="handleSelectChange"
    />
    <CategoriesSelect
      v-if="selected"
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
  