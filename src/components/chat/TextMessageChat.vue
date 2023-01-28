<template>
  <div
    v-if="
      message.payload &&
      message.payload.reply_to &&
      message.payload.reply_to.story
    "
  >
    <b class="mb-1">Hice un comentario en esta historia </b
    ><img style="height: 60%" :src="message.payload.reply_to.story.url" />
    <v-divider class="my-2"></v-divider>
  </div>

  <div v-html="parseMarkdown(message.text)" ref="target"></div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, onMounted, ref, defineEmits } from "vue";
import { getFileNameFromUrl, parseMarkdown } from "@/utils/utils";

import TextMessageChat from "@/components/chat/TextMessageChat.vue";

// Referral,AudioChat,FileChat,ImageChat,TextMessageChat

const props = defineProps({
  message: { type: Object, default: () => ({}) },
  messages: { type: Array, default: () => [] },
});
</script>

<style lang="scss" scoped></style>
