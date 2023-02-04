<template>
  <video style="width:250px;" :src="message.payload.url" controls />
  <div v-if="message.text">
    <v-divider class="my-2"></v-divider>
    <TextMessageChat :message="message"></TextMessageChat>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";
import TextMessageChat from "@/components/chat/TextMessageChat.vue";

const props = defineProps({ message: { type: Object, default: () => ({}) } });

const { message } = toRefs(props);
</script>

<style lang="scss" scoped>

</style>
