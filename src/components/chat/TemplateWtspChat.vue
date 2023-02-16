<template>
  <div class="message-container">
    <div
      v-for="item in message.payload.template"
      :key="item.type"
      class="message-item"
    >
      <template v-if="item.type === 'HEADER'">
        <h5 class="header" v-if="item.format === 'TEXT'">
          {{ headerReplaced || item.text }}
        </h5>
        <h5 v-if="item.format === 'DOCUMENT'">
          <a target="_blank" :href="item.example.header_handle[0]">{{
            getFileNameFromUrl(item.example.header_handle[0])
          }}</a>
        </h5>
        <h5 v-if="item.format === 'IMAGE'">
          <img :src="item.example.header_handle[0]" />
        </h5>
      </template>
      <template v-else-if="item.type === 'BODY'">
        <p class="body">
          {{ bodyReplaced || item.text }}
        </p>
      </template>
      <template v-else-if="item.type === 'FOOTER'">
        <p class="footer">{{ item.text }}</p>
      </template>
      <template v-else-if="item.type === 'BUTTONS'">
        <div class="button-container">
          <button
            v-for="button in item.buttons"
            :key="button.text"
            :href="button.url"
            class="button"
          >
            {{ button.text }}
          </button>
        </div>
      </template>
    </div>
  </div>
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

const { message, messages } = toRefs(props);
const headerReplaced = ref("");
const bodyReplaced = ref("");
const dynamicParameters = message.value.payload.dynamicParameters;

if (dynamicParameters) {
  console.log("TINE!");
  const dynamicHeader = dynamicParameters.header;
  const dynamicBody = dynamicParameters.body;
  if (dynamicHeader) {
    // replace dynamic parameters to header
    const header = message.value.payload.template.find(
      (item) => item.type === "HEADER"
    );
    headerReplaced.value = replaceValues(header.text, dynamicHeader);
  }
  if (dynamicBody) {
    const body = message.value.payload.template.find(
      (item) => item.type === "BODY"
    );
    bodyReplaced.value = replaceValues(body.text, dynamicBody);
  }
}

function replaceValues(text, values) {
  let replacedText = text;
  // regex to find all {{1}}, {{2}}, {{3}} etc
  const regex = /{{\d+}}/;
  for (let i = 0; i < values.length; i++) {
    replacedText = replacedText.replace(regex, values[i]);
  }
  return replacedText;
}
</script>

<style lang="scss" scoped>
.message-item {
  margin: 0;
  padding: 0;
}

.header {
  font-weight: bold;
  font-size: 15px;
  margin: 0;
  padding: 0;
}

.footer {
  font-size: 12px;
  margin: 10px 0;
}

.button-container {
  width: 100%;
}

.button {
  display: block;
  background-color: #ffffff;
  color: #63a5cc;
  padding: 5px 10px;
  border-radius: 15px;
  text-decoration: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
}

img {
  width: 450px;
}
</style>
