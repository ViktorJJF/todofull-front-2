<template>
  <div
    :class="[
      'chat-msg-text',
      message.type == 'agent_comment' || message.type == 'log'
        ? 'chat-agent-msg-text'
        : message.isProgrammed
        ? 'chat-programmed-msg-text'
        : '',
      'chat-msg-container',
    ]"
    class="message-box"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="chat-reaction" v-if="message.reaction">
      {{ message.reaction.emoji }}
    </div>
    <v-icon v-if="message.isProgrammed">mdi mdi-clock</v-icon>
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
    <div v-if="message.type === 'text' || !message.type" :id="message._id">
      <TextMessageChat
        :message="message"
        :messages="messages"
      ></TextMessageChat>
    </div>
    <div
      v-if="
        message.type === 'agent_comment' ||
        message.type === 'programmed' ||
        message.type === 'log'
      "
      :id="message._id"
    >
      <AgentComment :message="message" :messages="messages"></AgentComment>
      <div class="buttons-container left-buttons" v-show="hover">
        <button
          @click="emit('previousAgentCommentMessage', message)"
          class="message-options"
        >
          <i class="mdi mdi-chevron-up"></i>
        </button>
        <button
          @click="emit('nextAgentCommentMessage', message)"
          class="message-options"
        >
          <i class="mdi mdi-chevron-down"></i>
        </button>
      </div>

      <div class="buttons-container right-buttons" v-show="hover">
        <button
          class="message-options"
          @click="emit('editAgentCommentMessage', message)"
        >
          <i v-if="!message.isEditing" class="mdi mdi-pencil"></i>
          <i v-if="message.isEditing" class="mdi mdi-check"></i>
        </button>
        <button
          class="message-options"
          @click="emit('deleteAgentCommentMessage', message)"
        >
          <i class="mdi mdi-delete"></i>
        </button>
      </div>
    </div>

    <div v-if="message.type === 'comment'">
      <div>
        <b class="mb-1"
          >Hice un comentario en esta
          <a :href="message.payload.post_url" target="_blank"
            >publicación</a
          > </b
        ><img
          v-if="message.payload.media_type === 'IMAGE'"
          :src="message.payload.media_url"
          style="cursor: pointer; height: 60%"
          @click="openUrl(message.payload.post_url)"
        />
        <v-divider class="my-2"></v-divider>
      </div>
      <div v-html="parseMarkdown(message.text)" ref="target"></div>
    </div>

    <div v-if="message.type === 'referral'">
      <Referral :message="message"></Referral>
    </div>
    <div
      :class="{ 'reply-message': is_reply }"
      v-if="message.type === 'image' || message.type === 'sticker'"
    >
      <ImageChat :message="message"></ImageChat>
    </div>
    <div v-if="message.type === 'audio'">
      <AudioChat :message="message"></AudioChat>
    </div>
    <div v-if="message.type === 'file'">
      <FileChat :message="message"></FileChat>
    </div>
    <div v-if="message.type === 'template_wtsp'">
      <TemplateWtspChat :message="message"></TemplateWtspChat>
    </div>
    <div
      :class="{ 'reply-message': is_reply }"
      v-if="message.type === 'video' || message.type === 'unsupported_type'"
    >
      <VideoChat :message="message"></VideoChat>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, onMounted, ref, defineEmits } from "vue";
import Referral from "@/components/chat/Referral.vue";
import AudioChat from "@/components/chat/AudioChat.vue";
import FileChat from "@/components/chat/FileChat.vue";
import ImageChat from "@/components/chat/ImageChat.vue";
import VideoChat from "@/components/chat/VideoChat.vue";
import TextMessageChat from "@/components/chat/TextMessageChat.vue";
import AgentComment from "@/components/chat/AgentComment.vue";
import TemplateWtspChat from "@/components/chat/TemplateWtspChat.vue";

import { getFileNameFromUrl, parseMarkdown } from "@/utils/utils";

const props = defineProps({
  message: { type: Object, default: () => ({}) },
  messages: { type: Array, default: () => [] },
  is_reply: { type: Boolean, default: false },
});

const { message, messages } = toRefs(props);

const hover = ref<boolean>(false);
const messageContext = ref<any>({});
const emit = defineEmits([
  "goToMessage",
  "editAgentCommentMessage",
  "deleteAgentCommentMessage",
  "previousAgentCommentMessage",
  "nextAgentCommentMessage",
]);

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
      case "video":
        selectedComponent = VideoChat;
        break;
      case "unsupported_type":
        selectedComponent = VideoChat;
        break;
      case "sticker":
        selectedComponent = ImageChat;
        break;
      case "template_wtsp":
        selectedComponent = TemplateWtspChat;
        break;
      case "agent_comment":
        selectedComponent = AgentComment;
      case "log":
        selectedComponent = AgentComment;
        break;
      default:
        break;
    }
  }
  return selectedComponent;
}

function openUrl(url) {
  window.open(url, "_blank");
}
</script>

<style scoped>
.reply-message {
  width: 50px;
}

.chat-agent-msg-text {
  background-color: #fffbb5 !important;
  color: black !important;
}
.chat-programmed-msg-text {
  background-color: #3e8ede !important;
  color: white !important;
}

.message-box {
  position: relative;
}

.buttons-container {
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.left-buttons {
  left: -30px; /* Adjust this value according to your design */
}

.left-buttons button {
  display: block;
}

.right-buttons {
  right: -30px; /* Adjust this value according to your design */
}

.right-buttons button {
  display: block;
}

.message-box:hover .buttons-container {
  display: block;
}

.buttons-container button {
  background-color: #ffffff;
  border: none;
  border-radius: 50%;
  color: #000000;
  cursor: pointer;
  font-size: 24px;
  height: 40px;
  width: 40px;
}

.buttons-container button:hover {
  background-color: #f2f2f2;
}

.message-options i {
  font-size: 18px;
}
</style>
