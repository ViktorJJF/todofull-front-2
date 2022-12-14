<script setup lang="ts">
import { ref } from "vue";
import CreateUpdate from "./CreateUpdate/index.vue";
import MappingForm from "./MappingForm.vue";
import type { Attribute } from "@/types/attribute";
import type { AttributeTerm } from "@/types/attributeTerm";
import attributesService from "@/services/api/attributes";

const attributes = ref<Attribute[]>([]);
const selectedItem = ref<Attribute>(null);
const selectedTerm = ref<AttributeTerm>(null);
const isCreateUpdateVisible = ref(false);
const isMappingFormVisible = ref(false);

attributesService.list().then((res) => {
  attributes.value = res.data.payload;
});

const handleSelectItem = (item: Attribute) => {
  selectedItem.value = item;
  isCreateUpdateVisible.value = true;
};

const handleSelectTerm = (item: Attribute, term: AttributeTerm) => {
  selectedItem.value = item;
  selectedTerm.value = term;
  isMappingFormVisible.value = true;
};

const handleSave = (item: Attribute) => {
  const isUpdate = selectedItem.value;
  if (isUpdate) {
    const index = attributes.value.findIndex((o) => o._id === item._id);
    attributes.value.splice(index, 1, item); // replacing with new item
    return;
  }

  // otherwise is a new item
  attributes.value.push(item);
};

const handleCreateUpdateChange = (value: boolean) => {
  // clear selected item when dialog close
  if (value === false) {
    selectedItem.value = null;
  }
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col class="ml-2">
        <v-btn class="" @click="isCreateUpdateVisible = true">Agregar</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" v-for="attribute of attributes">
        <v-card>
          <v-card-title>
            {{ attribute.name }}
            <div class="float-right">
              <v-btn
                variant="text"
                size="small"
                color="dark"
                icon
                @click="handleSelectItem(attribute)"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn
              v-for="term of attribute.terms"
              variant="outlined"
              :key="term.name"
              @click="handleSelectTerm(attribute, term)"
            >
              {{ term.name }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="isCreateUpdateVisible"
      max-width="600px"
      @update:modelValue="handleCreateUpdateChange"
    >
      <CreateUpdate :attribute="selectedItem" @save="handleSave" />
    </v-dialog>
    <v-dialog v-model="isMappingFormVisible" max-width="600px">
      <MappingForm :attribute="selectedItem" :term="selectedTerm" />
    </v-dialog>
  </v-container>
</template>
