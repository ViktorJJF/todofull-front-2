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
  <div
    v-if="
      message.context &&
      Object.keys(message.context).length > 0 &&
      messageContext
    "
  >
    <v-alert
      @click="emit('goToMessage', messageContext)"
      class="mb-1"
      border="start"
      border-color="deep-purple accent-4"
      style="cursor: pointer"
    >
      <h6
        v-if="messageContext && messageContext.from == 'Cliente'"
        style="color: #06cf9c"
      >
        Cliente
      </h6>
      <h6 v-else style="color: #53bdeb">Tú</h6>
      <!-- Referral,AudioChat,FileChat,ImageChat -->
      <component
        v-if="getDynamicComponent(messageContext)"
        :is="getDynamicComponent(messageContext)"
        :message="messageContext"
      ></component>
      <div
        v-else
        v-html="parseMarkdown(messageContext.text)"
        ref="target"
      ></div>
    </v-alert>
    <v-divider class="my-2"></v-divider>
  </div>
  <div v-html="parseMarkdown(message.text)" ref="target"></div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, onMounted, ref, defineEmits } from "vue";
import { getFileNameFromUrl, parseMarkdown } from "@/utils/utils";
import Referral from "@/components/chat/Referral.vue";
import AudioChat from "@/components/chat/AudioChat.vue";
import FileChat from "@/components/chat/FileChat.vue";
import ImageChat from "@/components/chat/ImageChat.vue";
import TextMessageChat from "@/components/chat/TextMessageChat.vue";

// Referral,AudioChat,FileChat,ImageChat,TextMessageChat

const props = defineProps({
  message: { type: Object, default: () => ({}) },
  messages: { type: Array, default: () => [] },
});

const { message, messages } = toRefs(props);

const messageContext = ref({});
const emit = defineEmits(["goToMessage"]);

onMounted(() => {
  const context = message.value.context;
  if (context) {
    messageContext.value = getMessageByPlatformId(context.id);
  }
});

function getMessageByPlatformId(mid: string) {
  return messages.value.find((el: any) => {
    return el.mid === mid;
  });
}

function getDynamicComponent(messageContext) {
  const type = messageContext.type;
  let selectedComponent;
  if (type) {
    switch (type) {
      case "referral":
        selectedComponent = Referral;
        break;
      case "audio":
        selectedComponent = AudioChat;
        break;
      case "file":
        selectedComponent = FileChat;
        break;
      case "image":
        selectedComponent = ImageChat;
        break;
      case "sticker":
        selectedComponent = ImageChat;
        break;
      default:
        break;
    }
  }
  return selectedComponent;
}
</script>

<style lang="scss" scoped>
</style>