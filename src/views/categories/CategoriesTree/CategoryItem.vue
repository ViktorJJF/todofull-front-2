<script setup lang="ts">
import { ref, computed } from "vue";
import type { PropType } from "vue";
import type { CategoryItem } from "./types/categoryItem";
import AddBtn from "./AddBtn.vue";
import { colors } from "./colors";

const props = defineProps({
  item: {
    type: Object as PropType<CategoryItem>,
    required: true,
  },
  showAddBottom: {
    type: Boolean,
  },
  level: {
    type: Number,
    default: 0,
  },
  maxLevel: {
    type: Number,
  },
});

const isMappingBtnVisible = ref(false);

const showAddRight = computed(() => {
  return props.level < props.maxLevel;
});

const emit = defineEmits<{
  (e: "addItem", parentId: string): void;
  (e: "update:item", item: CategoryItem): void;
  (e: "mappingClick", item: CategoryItem): void;
}>();

const handleAddItem = (parentId?: string) => {
  emit("addItem", parentId);
};

const handleUpdateItem = (item: CategoryItem) => {
  emit("update:item", item);
};

const handleItemInput = (e: Event) => {
  const value = (e.target as any).innerText;
  const item = { ...props.item, name: value.trim() };
  handleUpdateItem(item);
};

const handleMappingClick = (item: CategoryItem) => {
  emit('mappingClick', item)
}
</script>

<template>
  <div class="row">
    <div class="col d-flex align-center flex-column">
      <div
        class="box"
        :style="{ backgroundColor: colors[level] }"
        @mouseenter="isMappingBtnVisible = true"
        @mouseleave="isMappingBtnVisible = false"
      >
        <div class="box-text" contenteditable @input="handleItemInput">
          {{ item.name }}
        </div>
        <v-btn
          v-if="isMappingBtnVisible"
          class="box-action"
          size="small"
          icon
          variant="text"
          color="dark"
          @click="handleMappingClick(item)"
        >
          <v-icon>mdi-sitemap-outline</v-icon>
          <v-tooltip activator="parent" location="bottom">Mapeo</v-tooltip>
        </v-btn>
      </div>
      <div v-if="showAddBottom" class="mt-3">
        <AddBtn @click="handleAddItem(item.parent)" :color="colors[level]" />
      </div>
    </div>
    <div v-if="item.children.length" class="col col-wrapper">
      <CategoryItem
        v-for="(innerItem, i) of item.children"
        :key="innerItem._id"
        :item="innerItem"
        :show-add-bottom="i === item.children.length - 1"
        :level="level + 1"
        :max-level="maxLevel"
        @add-item="handleAddItem"
        @update:item="handleUpdateItem"
        @mapping-click="handleMappingClick"

      />
    </div>
    <div v-else-if="showAddRight" class="col d-flex justify-start">
      <AddBtn
        class="mt-2"
        @click="handleAddItem(item._id)"
        :color="colors[level]"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.row {
  display: flex;
}
.col {
  flex: 0 0 auto;
  width: 250px;
  padding: 10px;
}

.col.col-wrapper {
  width: auto;
  padding: 0;
}

.box {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: relative;
}

.box-text {
  max-width: 75%;
  text-align: center;
}

.box-action {
  position: absolute;
  right: 5px;
}
</style>
