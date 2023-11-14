<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6" v-if="uploadedFiles.length">
          <div class="file-preview">
            <template
              v-for="(uploadedFile, uploadedFileIndex) in uploadedFiles"
              :key="uploadedFileIndex"
            >
              <!-- <img v-if="isImageFile" :src="filePreviewUrl" alt="Uploaded Image" /> -->
              <div class="uploaded-file">
                <a class="uploaded-link" :href="filePreviewUrl" download>{{
                  uploadedFile.name
                }}</a
                ><button
                  class="clear-uploaded-file mb-1 ml-2"
                  @click="deleteUploadedFile(uploadedFileIndex)"
                >
                  X
                </button>
              </div>
            </template>
          </div>
        </v-col>
        <v-col
          :cols="uploadedFiles.length ? '6' : '12'"
          class="container-upload"
          @click="triggerFileUpload"
          ><div
            @dragover="onDragOver"
            @dragleave="onDragLeave"
            @drop="onDrop"
            class="drag-message"
          >
            <span v-show="!isDragOver">{{ text }}</span>
            <span v-show="isDragOver">Suelta los archivos aquí</span>
          </div>
          <input
            type="file"
            ref="fileInput"
            @change="handleFileChange"
            multiple
            style="display: none"
        /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const emit = defineEmits(["onNewFiles"]);
const props = defineProps({
  files: { type: Array, default: () => [] },
  text: { type: String, default: "Arrastra una imagen o archivo aquí" },
});

const isDragOver = ref<boolean>(false);
const fileInput = ref<HTMLInputElement | null>(null);
const filePreviewUrl = ref<string | null>(null);
const isImageFile = ref<boolean>(false);
const uploadedFile = ref<any>(null);
const uploadedFiles = ref<any[]>([]);

onMounted(() => {
  if (props.files) {
    uploadedFiles.value = [...props.files];
  }
});
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
    for (const file of Array.from(e.dataTransfer.files)) {
      handleUploadedFile(file);
    }
  }
}

function triggerFileUpload() {
  fileInput.value?.click();
}

function handleFileChange() {
  if (fileInput.value && fileInput.value.files) {
    const filesArray = Array.from(fileInput.value.files);
    for (const file of filesArray) {
      handleUploadedFile(file);
    }
  }
}

function handleUploadedFile(file) {
  uploadedFile.value = file;
  uploadedFiles.value.push(file);
  emit("onNewFiles", uploadedFiles.value);
  // if (file.type?.startsWith("image/")) {
  //   isImageFile.value = true;
  //   filePreviewUrl.value = URL.createObjectURL(file);
  // } else {
  //   isImageFile.value = false;
  //   filePreviewUrl.value = URL.createObjectURL(file);
  // }
}

function clearUploadedFile() {
  filePreviewUrl.value = null;
  uploadedFile.value = null;
  emit("onNewFiles", null);
}

function deleteUploadedFile(index) {
  uploadedFiles.value.splice(index, 1);
  emit("onNewFiles", uploadedFiles.value);
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
  display: inline;
  margin: 0 auto;
  width: 45px; /* Set a fixed width */
  font-size: 0.75rem; /* Optionally reduce font size */
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

.uploaded-link {
  display: inline;
}
</style>
