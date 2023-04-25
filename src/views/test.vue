<template>
  <div>
    <button v-if="!isRecording" @click="startRecording">Record</button>
    <button v-else @click="stopRecording">Stop Recording</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRecording: false,
      mediaRecorder: null,
      chunks: [],
      stream: null,
    };
  },
  methods: {
    async startRecording() {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        // Check if microphone permission was granted
        const permissions = await navigator.permissions.query({
          name: "microphone",
        });
        if (permissions.state === "denied") {
          console.log("Microphone permission was denied");
          this.stream.getTracks().forEach((track) => track.stop());
          this.isRecording = false;
          this.mediaRecorder = null;
          return;
        }

        this.isRecording = true;
        this.chunks = [];
        this.mediaRecorder = new MediaRecorder(this.stream);

        this.mediaRecorder.addEventListener("dataavailable", (event) => {
          this.chunks.push(event.data);
        });

        this.mediaRecorder.addEventListener("stop", () => {
          const blob = new Blob(this.chunks, { type: "audio/wav" });
          const formData = new FormData();
          formData.append("audio", blob, "audio.wav");

          // Send formData to endpoint
          fetch("/endpoint", {
            method: "POST",
            body: formData,
          });

          this.isRecording = false;
          this.mediaRecorder = null;
          this.stream.getTracks().forEach((track) => track.stop());
        });

        this.mediaRecorder.start();
      } catch (error) {
        console.error(error);
        alert("Please grant permission to access the microphone");
      }
    },
    stopRecording() {
      this.mediaRecorder.stop();
    },
  },
};
</script>
