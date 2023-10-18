<template>
  <div class="container-upload" @click="triggerFileUpload">
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
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["onNewFile"]);

const isDragOver = ref<boolean>(false);
const fileInput = ref<HTMLInputElement | null>(null);

function onDragOver(e) {
  console.log("dentro");
  if (!isDragOver.value) {
    // this.uploadDialog=true;
    console.log("dragging");
    isDragOver.value = true;
  }
  e.preventDefault();
}

function onDragLeave(e) {
  if (e.currentTarget.contains(e.relatedTarget)) {
    return;
  }
  console.log("fuera xd");
  e.preventDefault();
  isDragOver.value = false;
}

function onDrop(e) {
  e.stopPropagation();
  e.preventDefault();
  console.log("dropped");
  isDragOver.value = false;
  if (e.dataTransfer && e.dataTransfer.files.length) {
    const droppedFile = e.dataTransfer.files[0];
    handleUploadedFile(droppedFile);
    // Process the dropped file here
  }
}

function triggerFileUpload() {
  fileInput.value?.click();
}

function handleFileChange() {
  if (fileInput.value && fileInput.value.files) {
    const selectedFile = fileInput.value.files[0];
    handleUploadedFile(selectedFile);
    // Process the selected file here
  }
}

function handleUploadedFile(file) {
  emit("onNewFile", file);
  // Upload the file to the cloud storage here
}
</script>

<style lang="scss" scoped>
.container-upload {
  cursor: pointer;
}
</style>
