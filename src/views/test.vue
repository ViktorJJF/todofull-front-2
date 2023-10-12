<template>
  <div>
    <div class="drag-message">Arrastra un archivo aquí</div>
    <div class="drag-message" v-show="isDragOver">Arrastra un archivo aquí</div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
