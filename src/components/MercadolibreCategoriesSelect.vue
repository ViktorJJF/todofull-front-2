<script setup lang="ts">
import marketplacseApi from "@/services/api/marketplaces";
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

const categories = ref([]);
const loading = ref(false);

// hide select when there is no more data
const hidden = computed(() => categories.value.length === 0 && loading.value === false)

const selected = computed(() => categories.value.length ? props.modelValue[props.level] : null)

const fetchCategories = async () => {
  loading.value = true
  if (props.parent) {
    const res = await marketplacseApi.listCategory(props.marketplace._id, props.parent)
    categories.value = res.data.payload.children_categories;
  } else {
    const res = await marketplacseApi.listCategories(props.marketplace._id)
    categories.value = res.data.payload;
  }
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
  <div :class="{ 'mt-2': parent }">
    <v-select
      v-if="!hidden"
      :items="categories"
      item-title="name"
      item-value="id"
      v-bind="attrs"
      :loading="loading"
      :modelValue="selected"
      @update:modelValue="handleSelectChange"
    />
    <MercadolibreCategoriesSelect
      v-if="selected"
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
  