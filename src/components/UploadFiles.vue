<template>
  <div
    v-if="!filePreviewUrl"
    class="container-upload"
    @click="triggerFileUpload"
  >
    <div
      @dragover="onDragOver"
      @dragleave="onDragLeave"
      @drop="onDrop"
      class="drag-message"
    >
      <span v-show="!isDragOver">Arrastra una imagen o archivo aquí</span>
      <span v-show="isDragOver">Suelta el archivo aquí</span>
    </div>
    <input
      type="file"
      ref="fileInput"
      @change="handleFileChange"
      style="display: none"
    />
  </div>
  <div v-if="filePreviewUrl" class="file-preview">
    <button class="clear-uploaded-file mb-3" @click="clearUploadedFile">
      Borrar
    </button>
    <img v-if="isImageFile" :src="filePreviewUrl" alt="Uploaded Image" />
    <a v-else class="uploaded-file" :href="filePreviewUrl" download>{{
      uploadedFile.name
    }}</a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["onNewFile"]);

const isDragOver = ref<boolean>(false);
const fileInput = ref<HTMLInputElement | null>(null);
const filePreviewUrl = ref<string | null>(null);
const isImageFile = ref<boolean>(false);
const uploadedFile = ref<any>(null);

function onDragOver(e) {
  if (!isDragOver.value) {
    isDragOver.value = true;
  }
  e.preventDefault();
}

function onDragLeave(e) {
  if (e.currentTarget.contains(e.relatedTarget)) {
    return;
  }
  e.preventDefault();
  isDragOver.value = false;
}

function onDrop(e) {
  e.stopPropagation();
  e.preventDefault();
  isDragOver.value = false;
  if (e.dataTransfer && e.dataTransfer.files.length) {
    const droppedFile = e.dataTransfer.files[0];
    handleUploadedFile(droppedFile);
  }
}

function triggerFileUpload() {
  fileInput.value?.click();
}

function handleFileChange() {
  if (fileInput.value && fileInput.value.files) {
    const selectedFile = fileInput.value.files[0];
    handleUploadedFile(selectedFile);
  }
}

function handleUploadedFile(file) {
  uploadedFile.value = file;
  emit("onNewFile", file);
  // Upload the file to the cloud storage here
  if (file.type?.startsWith("image/")) {
    isImageFile.value = true;
    filePreviewUrl.value = URL.createObjectURL(file);
  } else {
    isImageFile.value = false;
    filePreviewUrl.value = URL.createObjectURL(file);
  }
}

function clearUploadedFile() {
  filePreviewUrl.value = null;
  uploadedFile.value = null;
  emit("onNewFile", null);
}
</script>

<style lang="scss" scoped>
.container-upload {
  cursor: pointer;
}

.file-preview img {
  max-width: 350px;
  max-height: 350px;
  // center the image
  display: block;
  margin: 0 auto;
}

.clear-uploaded-file {
  background: red;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-bottom: 1rem;
  display: block;
  margin: 0 auto;
}

.uploaded-file {
  display: block;
  margin: 0 auto;
  color: black;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: #e0e0e0;
  margin-bottom: 1rem;
}
</style>
