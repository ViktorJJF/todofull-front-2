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
  <div v-if="message.referral">
    Desde
    <a :href="message.referral.ad?.preview_shareable_link" target="_blank"
      >anuncio</a
    >
    <div v-if="message.referral.ads_context_data?.video_url">
      <video
        style="height: 60%"
        :src="message.referral.ads_context_data.video_url"
        controls
      ></video>
    </div>
    <div v-else>
      <img
        style="height: 60%"
        :src="message.referral.ad?.image_url"
        @click="openUrl(message.referral.ad?.preview_shareable_link)"
      />
    </div>
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

function openUrl(url) {
  window.open(url, "_blank");
}
</script>

<style lang="scss" scoped></style>
