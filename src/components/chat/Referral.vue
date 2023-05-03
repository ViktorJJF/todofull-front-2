<template>
  <v-row style="cursor: pointer" @click="openUrl(message.payload.source_url)">
    <v-col cols="12" sm="3">
      <img style="height: 100%" :src="message.payload.image_url" />
    </v-col>
    <v-col cols="12" sm="9">
      <b>{{ message.payload.headline }}</b>
      <div
        v-if="message.payload.body"
        style="overflow: hidden"
        v-html="parseMarkdown(message.payload.body?.substring(0, 90) + '...')"
        ref="target"
      ></div>
    </v-col>
  </v-row>
  <div class="mt-2" v-html="parseMarkdown(message.text)" ref="target"></div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";
import { parseMarkdown } from "@/utils/utils";

const props = defineProps({ message: { type: Object, default: () => ({}) } });

const { message } = toRefs(props);

function openUrl(url) {
  window.open(url, "_blank");
}
</script>

<style lang="scss" scoped>
</style>