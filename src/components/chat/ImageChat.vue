<template>
  <img :src="message.payload.url" />
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";

const props = defineProps({ message: { type: Object, default: () => ({}) } });

const { message } = toRefs(props);
</script>

<style lang="scss" scoped>
</style>