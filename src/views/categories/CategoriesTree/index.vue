<script setup lang="ts">
import type { CategoryItem as ICategoryItem } from "./types/categoryItem";
import type { HeaderItem } from "./types/headerItem";
import CategoryItem from "./CategoryItem.vue";
import AddBtn from "./AddBtn.vue";
import { colors } from "./colors";

defineProps<{
  items: ICategoryItem[];
  headers: HeaderItem[];
}>();

const emit = defineEmits<{
  (e: "addItem", parent?: string): void;
  (e: "addHeader"): void;
  (e: "updateItem", item: ICategoryItem): void;
}>();

const handleAddItem = (parent?: string) => {
  emit("addItem", parent);
};
const handleAddHeader = () => {
  emit("addHeader");
};
const handleUpdateItem = (item: ICategoryItem) => {
  emit("updateItem", item);
};
</script>

<template>
  <div>
    <div class="row align-center">
      <div class="col" v-for="(header, i) in headers" :key="header.label">
        <div class="box" :style="{ backgroundColor: colors[i] }">
          <span>{{ header.label }}</span>
        </div>
      </div>
      <AddBtn @click="handleAddHeader()" :color="colors[headers.length - 1]" />
    </div>

    <v-divider class="my-6" />

    <template v-for="(item, i) of items" :key="item._id">
      <CategoryItem
        :item="item"
        :show-add-bottom="i === items.length - 1"
        :max-level="headers.length - 1"
        @add-item="handleAddItem"
        @update-item="handleUpdateItem"
      />
      <v-divider class="my-6" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.row {
  display: inline-flex;
}
.col {
  flex: 0 0 auto;
  width: 250px;
  padding: 10px;
}
.box {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
