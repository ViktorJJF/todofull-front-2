<template>
  <div class="recording-container">
    <!-- Button to start recording -->
    <v-btn
      color="white"
      v-if="!isRecording && !isPaused"
      @click="startRecording"
      small
    >
      <v-icon>mdi-microphone</v-icon>
    </v-btn>

    <!-- Button to pause recording -->
    <v-btn color="white" v-if="isRecording" @click="pauseRecording" small>
      <v-icon>mdi-pause-circle</v-icon>
    </v-btn>

    <!-- Button to playback the recorded audio -->
    <v-btn color="white" v-if="isPaused" @click="playbackRecording" small>
      <v-icon>mdi-play-circle</v-icon>
    </v-btn>

    <!-- Button to delete the recording -->
    <v-btn
      color="white"
      v-if="isRecording || isPaused"
      @click="deleteRecording"
      small
    >
      <v-icon>mdi-delete-circle</v-icon>
    </v-btn>

    <!-- Recording timeline -->
    <!-- <div class="timeline-container" v-if="isRecording || isPaused">
      <div class="timeline-progress" :style="{ width: progress + '%' }"></div>
    </div> -->

    <!-- Display recording time -->
    <div v-if="isRecording || isPaused">{{ formatTime(recordingTime) }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted, onMounted } from "vue";

const emit = defineEmits(["onNewAudio"]);
const props = defineProps({
  audios: { type: Array, default: () => [{}] },
});

const maxRecordingTime = 60 * 5;

const isRecording = ref<boolean>(false);
const isPaused = ref<boolean>(false);
const stream = ref<MediaStream | null>(null);
const mediaRecorder = ref<MediaRecorder | null>(null);
const chunks = ref<Blob[]>([]);
const audioMessage = ref<Blob | null>(null);
const recordingTime = ref<number>(0);
let recordingInterval: number | null = null;
const progress = ref<number>(0); // New ref to keep track of the progress
const recordingTimeStartMillis = ref<number>(0);
const recordingTimeEndMillis = ref<number>(0);
const audioUploaded = ref<any>(null);

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

async function startRecording() {
  try {
    recordingTimeStartMillis.value = Date.now();
    stream.value = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    // Check if microphone permission was granted
    const permissions = await navigator.permissions.query({
      name: "microphone" as PermissionName,
    });
    if (permissions.state === "denied") {
      console.log("Microphone permission was denied");
      stream.value.getTracks().forEach((track) => track.stop());
      isRecording.value = false;
      mediaRecorder.value = null;
      return;
    }

    isRecording.value = true;
    chunks.value = [];
    mediaRecorder.value = new MediaRecorder(stream.value);

    mediaRecorder.value.addEventListener("dataavailable", (event) => {
      chunks.value.push(event.data);
    });

    mediaRecorder.value.addEventListener("stop", async () => {
      if (stream.value) {
        stream.value.getTracks().forEach((track) => track.stop());
      }
      // blob
      let blob = new Blob(chunks.value, { type: "audio/wav" });
      blob["duration"] =
        recordingTimeEndMillis.value - recordingTimeStartMillis.value;
      if (blob) {
        emit("onNewAudio", blob);
        // try {
        //   const formData = new FormData();
        //   formData.append("file", blob, "audio.wav");
        //   // Send audio to aws
        //   let response = await filesService.createAudio(formData);
        //   const url = response.data.payload.url;
        //   console.log("🚀 Aqui *** -> url:", url);
        //   // this.sendMessage(this.text, "Agente", "audio", { url });
        // } catch (error) {
        //   console.log(error);
        // } finally {
        //   isRecording.value = false;
        //   mediaRecorder.value = null;
        //   stream.value.getTracks().forEach((track) => track.stop());
        //   this.clear();
        // }
      }
    });

    mediaRecorder.value.start();
    // Start the recording time interval
    recordingInterval = window.setInterval(() => {
      recordingTime.value++;
      // Update progress based on the elapsed recording time
      // You'll need to define the maximum recording time; for example, 60 seconds
      progress.value = (recordingTime.value / maxRecordingTime) * 100;
    }, 1000);
  } catch (error) {
    console.error(error);
    alert("Please grant permission to access the microphone");
  }
}

watch(recordingTime, (newValue) => {
  // Assuming max recording time is 60 seconds for demonstration purposes
  // Replace 60 with the actual max recording time in seconds
  progress.value = (newValue / 60) * 100;
});

async function stopRecording() {
  recordingTimeEndMillis.value = Date.now();
  mediaRecorder.value.stop();
  isRecording.value = false;
  clearInterval(recordingInterval);
}
async function pauseRecording() {
  recordingTimeEndMillis.value = Date.now();
  mediaRecorder.value.pause();
  isPaused.value = true;
  stopRecording();
  clearInterval(recordingInterval);
}
async function resumeRecording() {
  mediaRecorder.value.resume();
  isPaused.value = false;
  isRecording.value = true;
  // Resume the recording time interval
  recordingInterval = window.setInterval(() => {
    recordingTime.value++;
    // Update progress based on the elapsed recording time
    progress.value = (recordingTime.value / maxRecordingTime) * 100;
  }, 1000);
}
async function deleteRecording() {
  if (stream.value) {
    stream.value.getTracks().forEach((track) => track.stop());
  }
  if (mediaRecorder.value) {
    mediaRecorder.value.stop();
  }
  clear();
}

function clear() {
  isPaused.value = false;
  isRecording.value = false;
  mediaRecorder.value = null;
  chunks.value = [];
  stream.value = null;
  recordingTime.value = 0;
  audioUploaded.value = null;
  clearInterval(recordingInterval);
}

async function playbackRecording() {
  console.log("REproduciendo: ", chunks.value.length);
  if (audioUploaded.value) {
    (audioUploaded.value as HTMLAudioElement).play();
    return;
  }
  if (chunks.value.length > 0) {
    const blob = new Blob(chunks.value, { type: "audio/wav" });
    const audioUrl = URL.createObjectURL(blob);
    const audio = new Audio(audioUrl);
    audio.play();
  }
}

onMounted(() => {
  if (props.audios && props.audios.length) {
    // just handle 1 audio for now
    const { duration, url } = props.audios[0] as any;
    recordingTime.value = Math.floor(duration / 1000);
    audioUploaded.value = new Audio(url);
    progress.value = (recordingTime.value / maxRecordingTime) * 100;
    isPaused.value = true;
  }
});

onUnmounted(() => {
  clearInterval(recordingInterval);
});
</script>

<style scoped>
/* Use a flex container to align buttons and time display */
div {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Style the buttons with a neutral color and add some margin */
.v-btn {
  margin: 0 8px;
  border-radius: 50%; /* Circular buttons */
  border: none;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Soft shadow for depth */
}

/* Icon styles for a larger, centered icon inside the button */
.v-icon {
  font-size: 24px; /* Larger icons */
}

/* Style for the recording time display */
div > div {
  background-color: #f5f5f5;
  padding: 8px 16px;
  border-radius: 16px; /* Rounded edges for the timer */
  margin: 0 8px;
  font-size: 16px;
  color: #333;
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.1); /* Inner shadow for inset effect */
}

.recording-container {
  display: flex;
  align-items: center;
}

.timeline-container {
  height: 4px;
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 2px;
  margin: 0 8px;
  position: relative;
}

.timeline-progress {
  height: 100%;
  background-color: #4caf50; /* Green progress bar */
  border-radius: 2px;
}
</style>
