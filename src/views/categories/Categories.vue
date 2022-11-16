<script setup lang="ts">
import { ref, computed } from "vue";
import CategoriesTree from "./CategoriesTree/index.vue";
import MapingDialog from "./MappingDialog.vue";
import type { CategoryItem } from "./CategoriesTree/types/categoryItem";
import type { Category } from "./types/category";
import categoriesApi from "@/services/api/categories";
import { v4 as uuidv4 } from "uuid";

const headers = ref([
  { label: "Departamento" },
  { label: "Categorias" },
  { label: "Categoria Hija" },
  { label: "Categoria Hija 2" },
  { label: "Categoria Hija 3" },
]);
const categoriesToUpload = ref<CategoryItem[]>([]);
const categories = ref<Category[]>([]);
const isSaveLoading = ref(false);
const selectedItem = ref<CategoryItem>(null);
const isMappingDialogOpen = ref(false);

categoriesApi.list().then((res) => {
  categories.value = res.data.payload;
});

const categoriesTree = computed(() => {
  // using slice to pass array as value
  return buildCategoriesTree(categories.value);
});

const handleMappingClick = (item: CategoryItem) => {
  selectedItem.value = item;
  isMappingDialogOpen.value = true;
};

const getChildren = (category: Category, list: Category[]) => {
  const childrens = [];
  for (const [index, item] of list.entries()) {
    if (category._id === item.parent) {
      // mutating the object to avoid creating a new space in memory
      Object.assign(item, { children: getChildren(item, list) });
      childrens.push(item);
    }
  }
  return childrens;
};

const buildCategoriesTree = (categories): CategoryItem[] => {
  const items = [];
  // find roots categories and remove them from base array
  for (const [index, category] of categories.entries()) {
    if (category.parent === null) {
      // mutating the object to avoid creating a new space in memory
      Object.assign(category, { children: getChildren(category, categories) });
      items.push(category);
    }
  }
  return items;
};

const handleAddItem = (parentId?: string) => {
  const newItem = {
    _id: uuidv4(),
    name: "Categoria",
    parent: parentId,
    children: [],
    isNew: true,
  };
  categories.value.push(newItem);
  categoriesToUpload.value.push(newItem);
};

const handleAddHeader = () => {
  headers.value.push({ label: `Categoria Hija ${headers.value.length - 1}` });
};

const handleUpdateItem = (item: CategoryItem) => {
  const index = categoriesToUpload.value.findIndex(
    (cat) => cat._id === item._id
  );
  if (index !== -1) {
    categoriesToUpload.value.splice(index, 1, item);
    return;
  }
  categoriesToUpload.value.push(item);
};

const handleSave = async () => {
  isSaveLoading.value = true;
  const promises = categoriesToUpload.value.map(async (item) => {
    if (item.isNew) {
      await categoriesApi.create(item);
      return;
    }
    await categoriesApi.update(item._id, item);
  });

  await Promise.allSettled(promises);

  categoriesToUpload.value = [];
  isSaveLoading.value = false;
};
</script>

<template>
  <v-card class="overflow-x-auto">
    <v-card-title>Categorias</v-card-title>
    <v-card-text :style="{ display: 'inline-block' }">
      <v-btn
        class="ml-3 mb-2"
        :disabled="!categoriesToUpload.length"
        :loading="isSaveLoading"
        @click="handleSave"
      >
        Guardar
      </v-btn>
      <CategoriesTree
        :headers="headers"
        :items="categoriesTree"
        @add-item="handleAddItem"
        @add-header="handleAddHeader"
        @update-item="handleUpdateItem"
        @mapping-click="handleMappingClick"
      />
    </v-card-text>
    <v-dialog v-model="isMappingDialogOpen" max-width="600px">
      <MapingDialog :item="selectedItem" />
    </v-dialog>
  </v-card>
</template>
