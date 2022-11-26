<script setup lang="ts">
import CategoriesSelect from "@/components/CategoriesSelect.vue";
import categoriesService from "@/services/api/categories";
import { ref } from "vue";

const props = defineProps<{
  modelValue: string[];
}>();

const emits = defineEmits<{
  (e: "update:model-value", payload: string[]): void;
}>();

const items = ref([]);

const fetchInitialValues = async () => {
  const res = await categoriesService.list({ id: props.modelValue.join(",") });
  const categories = res.data.payload;
  items.value = categories.map((category) => ({
    selected: category.pathFromRoot.map((o) => o._id),
  }));
};

fetchInitialValues();

const handleAddItem = () => {
  items.value.push({
    selected: [],
  });
};

const handleChange = (val: string[], index) => {
  const modelValue = [...props.modelValue];
  modelValue[index] = val.slice(-1)[0];
  emits("update:model-value", modelValue);
};
</script>

<template>
  <v-row dense class="my-3">
    <v-col>
      <h3 class="mt-1">Sección de Categorías</h3>
    </v-col>
  </v-row>
  <v-row v-for="(item, index) of items" :key="index">
    <v-col>
      <div class="body-1 font-weight-bold">Categoria {{ index + 1 }}</div>
      <CategoriesSelect
        v-model="item.selected"
        variant="outlined"
        density="compact"
        hide-details
        clearable
        placeholder="Selecciona una categoría"
        @update:model-value="(val) => handleChange(val, index)"
      />
    </v-col>
    <v-col cols="12">
      <v-divider />
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-btn icon size="x-small" @click="handleAddItem">
        <v-icon>mdi-plus</v-icon>
        <v-tooltip activator="parent" anchor="start">Nueva Categoria</v-tooltip>
      </v-btn>
    </v-col>
  </v-row>
</template>
