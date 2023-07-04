<template>
  <v-card class="pa-3 mb-3">
    <v-btn
      size="small"
      color="success"
      class="mb-3"
      :loading="loading"
      @click="train"
      >Entrenar</v-btn
    ><v-card v-for="(document, idx) in documents" :key="idx" class="pa-3 mb-3">
      <v-text-field
        density="compact"
        hide-details
        variant="outlined"
        class="mb-2"
        placeholder="Título (Opcional)"
        v-model="document.title"
      ></v-text-field>
      <v-textarea
        class=""
        rows="3"
        variant="outlined"
        placeholder="Contenido"
        v-model="document.content"
        auto-grow
      ></v-textarea>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="save(document)">Guardar</v-btn>
        <v-btn color="error" @click="deleteDocument(document)">Borrar</v-btn>
      </v-card-actions>
    </v-card>
    <v-btn color="info" @click="addDocument">Nuevo documento</v-btn></v-card
  >
  <v-container class="pa-3"> </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { v4 as uuidv4 } from "uuid";
import openaiService from "@/services/api/openai";

const $store = useStore();

const documents = ref([]);

const loading = ref(false);

onMounted(() => {
  initialize();
});

async function initialize() {
  await Promise.all([
    $store.dispatch("documentsModule/list", {
      sort: "updatedAt",
      order: "desc",
    }),
  ]);
  documents.value = JSON.parse(
    JSON.stringify($store.state.documentsModule.documents)
  );
}

function addDocument() {
  documents.value.push({
    title: "",
    content: "",
  });
}

function deleteDocument(document) {
  documents.value.splice(documents.value.indexOf(document), 1);
}

async function save(document) {
  if (document._id) {
    // update
    await $store.dispatch("documentsModule/update", {
      id: document._id,
      data: document,
    });
  } else {
    // create
    await $store.dispatch("documentsModule/create", document);
  }
}

async function train() {
  loading.value = true;
  await openaiService.train();
  loading.value = false;
}
</script>