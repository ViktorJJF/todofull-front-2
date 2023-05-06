<template>
  <div
    v-show="!message.isEditing"
    v-html="parseMarkdown(message.text)"
    ref="target"
  ></div>
  <textarea v-show="message.isEditing" v-model="message.text"></textarea>
</template>

<script setup lang="ts">
import { defineProps, toRefs, onMounted, ref, defineEmits } from "vue";
import { parseMarkdown } from "@/utils/utils";

const props = defineProps({
  message: { type: Object, default: () => ({}) },
  messages: { type: Array, default: () => [] },
});
</script>

<style lang="scss" scoped></style>
