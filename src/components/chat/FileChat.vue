<template>
  <i class="mr-2 mdi text-h5 mdi-file"></i>
  <a target="_blank" :href="message.payload.url">{{
    getFileNameFromUrl(message.payload.url)
  }}</a>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";
import { getFileNameFromUrl } from "@/utils/utils";

const props = defineProps({ message: { type: Object, default: () => ({}) } });

const { message } = toRefs(props);
</script>

<style lang="scss" scoped>
</style>