<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import VerticalSidebarVue from "./vertical-sidebar/VerticalSidebar.vue";
import VerticalHeaderVue from "./vertical-header/VerticalHeader.vue";
import Customizer from "./customizer/Customizer.vue";
import ChatSidebar from './chat-sidebar/ChatSidebar.vue'
import { useCustomizerStore } from "@/stores/customizer";
import { useChatSidebarStore } from '@/stores/chatSidebar'
import HorizontalHeader from "./horizontal-header/HorizontalHeader.vue";
import HorizontalSidebar from "./horizontal-sidebar/HorizontalSidebar.vue";
const customizer = useCustomizerStore();
const chatSidebar = useChatSidebarStore()
const route = useRoute()
</script>

<template>
  <v-app
    :theme="customizer.darktheme ? 'dark' : 'light'"
    :class="[
      customizer.mini_sidebar ? 'mini-sidebar' : '',
      customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
    ]"
  >
    <Customizer />
    <ChatSidebar />
    <VerticalSidebarVue v-if="!customizer.setHorizontalLayout" />
    <VerticalHeaderVue v-if="!customizer.setHorizontalLayout" />
    <v-main>
      <HorizontalHeader v-if="customizer.setHorizontalLayout" />
      <HorizontalSidebar v-if="customizer.setHorizontalLayout" />
      <v-container fluid class="page-wrapper">
        <RouterView />

        <v-btn
          class="customizer-btn"
          icon="mdi-cog"
          size="large"
          flat
          @click.stop="chatSidebar.SET_SIDEBAR_DRAWER()"
          v-if="route.name==='Apps'"
        >
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>
