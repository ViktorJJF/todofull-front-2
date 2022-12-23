<script setup lang="ts">
import { ref, computed, watch } from "vue";
import MappingSection from "./MappingSection.vue";
import CategoriesSection from "./CategoriesSection.vue";
import type { SubmitEventPromise } from "vuetify";
import type { Attribute } from "@/types/attribute";
import type { AttributeTerm } from "@/types/attributeTerm";
import { AttributeType } from "@/types/attributeType";
import attributesService from "@/services/api/attributes";

const props = defineProps<{ attribute?: Attribute }>();

const emit = defineEmits<{
  (e: "save", payload: Attribute): void;
}>();

const editedItem = ref<Attribute>({
  _id: props.attribute?._id || null,
  name: props.attribute?.name || "",
  type: props.attribute?.type || null,
  terms: props.attribute?.terms || [],
  category: props.attribute?.category || null,
  categories: props.attribute?.categories || [],
  mercadolibre: props.attribute?.mercadolibre || "",
});
const term = ref<AttributeTerm>({
  name: "",
  description: "",
});
const typeOptions = ref([
  { title: "Select", value: AttributeType.Select },
  { title: "Text", value: AttributeType.Text },
  { title: "Color Picker", value: AttributeType.Color },
]);
const loadingButton = ref(false);
const categoriesSelected = ref([]);

const formTitle = computed(() => {
  return props.attribute ? "Modificar Atributo" : "Agregar Nuevo Atributo";
});

watch(categoriesSelected, (val) => {
  if (val.length) {
    Object.assign(editedItem.value, {
      category: categoriesSelected.value.slice(-1)[0],
    });
  }
});

const handleAddTerm = () => {
  if (!term.value.name.trim().length) return;
  editedItem.value.terms.push(term.value);
  term.value = {
    name: "",
    description: "",
  };
};

const handleSubmit = async (e: SubmitEventPromise) => {
  const isUpdate = editedItem.value._id;
  if (isUpdate) {
    const res = await attributesService.update(
      editedItem.value._id,
      editedItem.value
    );
    emit("save", res.data.payload);
    return;
  }
  // otherwise is a new item
  const res = await attributesService.create(editedItem.value);
  emit("save", res.data.payload);
};
</script>

<template>
  <v-card>
    <v-form @submit.prevent="handleSubmit">
      <v-card-title>
        <v-icon color="primary" class="mr-1">mdi-update</v-icon>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-container>
        <v-row dense class="mb-2">
          <v-col cols="12" sm="12" md="12">
            <h3 class="mt-1">Datos generales</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <div class="body-1 font-weight-bold">Nombre atributo</div>
            <v-text-field
              v-model="editedItem.name"
              placeholder="Ingresa el nombre"
              variant="outlined"
              density="compact"
              hide-details
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="body-1 font-weight-bold">Tipo</div>
            <v-select
              :items="typeOptions"
              v-model="editedItem.type"
              :rules="[(val) => !!val || 'El campo es requerido']"
              variant="outlined"
              density="compact"
              hide-details
            />
          </v-col>
        </v-row>

        <CategoriesSection v-model="editedItem.categories" />

        <MappingSection
          v-if="editedItem.categories.length"
          v-model:mercadolibre="editedItem.mercadolibre"
          :category="editedItem.categories[0]"
        />

        <v-row>
          <v-col cols="12">
            <div class="body-1 font-weight-bold">Términos</div>
            <v-btn color="primary" @click="handleAddTerm"> Agregar </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="body-1 font-weight-bold">Nombre</div>
            <v-text-field
              v-model="term.name"
              placeholder="Ingresa el nombre"
              variant="outlined"
              density="compact"
              hide-details
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="body-1 font-weight-bold">Descripción</div>
            <v-text-field
              v-model="term.description"
              placeholder="Ingresa el nombre"
              variant="outlined"
              density="compact"
              hide-details
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-table class="f">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="term of editedItem.terms" :key="term.name">
                  <td>{{ term.name }}</td>
                  <td>{{ term.description }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions rd-actions>
        <div class="flex-grow-1"></div>
        <v-btn type="submit" :loading="loadingButton" variant="outlined">
          Guardar
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
