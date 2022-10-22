<script setup lang="ts">
import { ref } from "vue";
const headers = ref([
  { label: "Departamento" },
  { label: "Categorias" },
  { label: "Categoria Hija" },
  { label: "Categoria Hija 2" },
]);

interface Category {
  _id: string;
  name: string;
  position?: number;
  parent?: string;
  children: Category[];
}

const categoriesTree = ref([
  {
    _id: "1",
    name: "Jeans",
    parent: null,
    children: [
      {
        _id: "2",
        name: "Skinny",
        parent: "1",
        children: [],
      },
      {
        _id: "3",
        name: "Push Up",
        parent: "1",
        children: [],
      },
    ],
  },
]);

const handleAddChildren = (category?: Category) => {
  if (category) {
    category.children.push({
      _id: "123",
      name: "",
      parent: category._id,
      children: [],
    });
    return;
  }

  categoriesTree.value.push({
    _id: "123",
    name: "Departamento X",
    parent: null,
    children: [],
  });
};
</script>

<template>
  <v-card class="overflow-x-auto">
    <v-card-title>Categorias</v-card-title>
    <v-card-text>
      <div class="row mb-6">
        <div class="col" v-for="header in headers" :key="header.label">
          <div class="box">
            <span>{{ header.label }}</span>
          </div>
        </div>
      </div>

      <template v-for="(category, index) of categoriesTree">
        <div class="row">
          <div class="col d-flex align-center flex-column">
            <div class="box">
              {{ category.name }}
            </div>
            <div class="mt-5" v-if="index === categoriesTree.length - 1">
              <v-btn icon="mdi-plus" @click="handleAddChildren()" />
            </div>
          </div>
          <div class="col col-wrapper">
            <div
              class="row"
              v-for="(childCategory, index) of category.children"
            >
              <div class="col d-flex align-center flex-column">
                <div class="box mb-3">
                  {{ childCategory.name }}
                </div>
                <div class="mt-5" v-if="index === category.children.length - 1">
                  <v-btn icon="mdi-plus" @click="handleAddChildren(category)" />
                </div>
              </div>
              <div class="col">
                <div
                  class="row"
                  v-for="innerCategory in childCategory.children"
                >
                  <div class="col d-flex justify-center">
                    <div class="box mb-3">
                      {{ innerCategory.name }}
                    </div>
                  </div>
                </div>
                <div>
                  <div class="col d-flex justify-center">
                    <v-btn
                      icon="mdi-plus"
                      @click="handleAddChildren(childCategory)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <v-divider class="my-6" />
      </template>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
.row {
  display: flex;
}
.col {
  flex: 0 0 auto;
  width: 250px;
  padding: 10px;
}

.col-wrapper {
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
}
</style>
