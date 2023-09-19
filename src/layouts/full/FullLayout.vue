<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import { RouterView, useRoute } from "vue-router";
import VerticalSidebarVue from "./vertical-sidebar/VerticalSidebar.vue";
import VerticalHeaderVue from "./vertical-header/VerticalHeader.vue";
import Customizer from "./customizer/Customizer.vue";
import ChatSidebar from "./chat-sidebar/ChatSidebar.vue";
import { useCustomizerStore } from "@/stores/customizer";
import { useChatSidebarStore } from "@/stores/chatSidebar";
import HorizontalHeader from "./horizontal-header/HorizontalHeader.vue";
import HorizontalSidebar from "./horizontal-sidebar/HorizontalSidebar.vue";
import { getQueryParams } from "@/utils/utils";

const customizer = useCustomizerStore();
const chatSidebar = useChatSidebarStore();
const route = useRoute();
const store = useStore();
onMounted(() => {
  const queryParams = getQueryParams();
  if (queryParams["isChatOneToOne"]) {
    store.commit("setIsChatOneToOne", true);
  }
});
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
    <VerticalSidebarVue
      v-if="!customizer.setHorizontalLayout && !store.state.isChatOneToOne"
    />
    <VerticalHeaderVue
      v-if="!customizer.setHorizontalLayout && !store.state.isChatOneToOne"
    />
    <v-main>
      <HorizontalSidebar v-if="customizer.setHorizontalLayout" />
      <v-container fluid class="page-wrapper">
        <RouterView />

        <v-btn
          class="customizer-btn"
          icon="mdi-cog"
          size="large"
          flat
          @click.stop="chatSidebar.SET_SIDEBAR_DRAWER()"
          v-if="route.name === 'Apps'"
        >
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>
