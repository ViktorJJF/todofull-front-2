<template>
  <audio controls>
    <source :src="message.payload.url" type="audio/mp3" />
    Tu navegador no soporta audio HTML5.
  </audio>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";

const props = defineProps({ message: { type: Object, default: () => ({}) } });

const { message } = toRefs(props);
</script>

<style lang="scss" scoped>
</style>