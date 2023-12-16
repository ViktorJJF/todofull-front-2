<template>
  <div>
    <template class="mb-1" v-for="(audio, idx) in audios" :key="idx">
      <v-row v-if="audio.duration || audio.isAudioBlob">
        <v-col :cols="9">
          <AudioRecording
            :audioObject="audio"
            @onNewAudio="onNewAudio($event, idx)"
            class="mb-1"
        /></v-col>
        <v-col :cols="3">
          <button
            class="clear-uploaded-file mb-1 ml-2"
            @click="deleteAudio(idx)"
          >
            X
          </button></v-col
        >
      </v-row>
    </template>

    <v-btn variant="text" @click="addNewAudio"> Nuevo audio </v-btn>
    <UploadFiles
      text="Arrastra tus archivos de audio aquí"
      :files="[]"
      @onNewFiles="onNewFiles"
    ></UploadFiles>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted, onMounted } from "vue";
import AudioRecording from "./AudioRecording.vue";
import UploadFiles from "@/components/UploadFiles.vue";

const emit = defineEmits(["onNewAudios"]);
const props = defineProps({
  audios: { type: Array, default: () => [{}] },
});

const audios = ref<Array<any>>(props.audios);

function addNewAudio() {
  audios.value.push({ isAudioBlob: true });
}

function onNewAudio(audio, index) {
  audios.value[index] = audio;
  emit("onNewAudios", audios.value);
}

function deleteAudio(index) {
  audios.value.splice(index, 1);
}

function onNewFiles(files) {
  files.forEach((file) => {
    audios.value.push(file);
  });
  emit("onNewAudios", audios.value);
}
</script>

<style scoped></style>
