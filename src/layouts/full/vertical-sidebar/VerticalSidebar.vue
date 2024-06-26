<script setup lang="ts">
import { ref, watch } from "vue";
import { useCustomizerStore } from "@/stores/customizer";
import sidebarItems from "./sidebarItem";
import LogoLight from "../logo/LogoLight.vue";
import LogoDark from "../logo/LogoDark.vue";
import { useDisplay } from "vuetify";
import { useStore } from "vuex";

const customizer = useCustomizerStore();
const sidebarMenu = ref(sidebarItems);
const { mdAndUp } = useDisplay();

const store = useStore();

function handleOption(item) {
  if (item.title === "Cerrar sesión") {
    store
      .dispatch("authModule/logout")
      .then(() => {})
      .catch((err) => {
        console.log("algo salio mal en logout:", err);
      });
  }
  if (item.externalLink) {
    window.open(item.externalLink, '_blank');
  }
}
</script>

<template>
  <v-navigation-drawer
    left
    :permanent="mdAndUp"
    v-model="customizer.Sidebar_drawer"
    elevation="10"
    :class="customizer.SidebarColor == 'white' ? '' : 'text-white'"
    :color="customizer.darktheme ? '' : customizer.SidebarColor"
    rail-width="75"
    mobile-breakpoint="960"
    app
    :rail="customizer.mini_sidebar"
    expand-on-hover
  >
    <!-- ---------------------------------------------- -->
    <!---Logo part -->
    <!-- ---------------------------------------------- -->
    <div class="pa-4">
      <LogoDark
        v-if="!customizer.darktheme && customizer.SidebarColor == 'white'"
      />
      <LogoLight v-else />
    </div>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <perfect-scrollbar class="scrollnavbar">
      <v-list class="pa-4">
        <!-- ---------------------------------------------- -->
        <!---Menu Loop -->
        <!-- ---------------------------------------------- -->
        <template v-for="(item, i) in sidebarMenu">
          <!-- ---------------------------------------------- -->
          <!---Item Sub Header -->
          <!-- ---------------------------------------------- -->
          <v-list-subheader v-if="item.header">{{
            item.header
          }}</v-list-subheader>
          <!-- ---------------------------------------------- -->
          <!---If Has Child -->
          <!-- ---------------------------------------------- -->
          <v-list-group v-else-if="item.children" class="">
            <!-- ---------------------------------------------- -->
            <!---Dropdown  -->
            <!-- ---------------------------------------------- -->
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :value="item.title"
                rounded="lg"
                class="mb-1"
              >
                <!---Icon  -->
                <span start class="span--start">
                  <vue-feather
                    :type="item.icon"
                    class="feather-sm"
                  ></vue-feather>
                </span>
                <!---Title  -->
                <v-list-item-title
                  v-text="item.title"
                  class="mr-auto"
                ></v-list-item-title>
                <template v-slot:append>
                  <span end class="span--end">
                    <vue-feather
                      type="chevron-down"
                      class="feather-sm"
                    ></vue-feather>
                  </span>
                </template>
              </v-list-item>
            </template>
            <!-- ---------------------------------------------- -->
            <!---Sub Item-->
            <!-- ---------------------------------------------- -->
            <v-list-item
              v-for="(subitem, i) in item.children"
              :key="i"
              :value="subitem.to"
              :to="subitem.to"
              rounded="lg"
              class="first-level-item mb-1"
            >
              <span start class="span--start">
                <vue-feather type="disc" class="feather-sm"></vue-feather>
              </span>
              <v-list-item-title v-text="subitem.title"></v-list-item-title>
            </v-list-item>
          </v-list-group>
          <!-- ---------------------------------------------- -->
          <!---Single Item-->
          <!-- ---------------------------------------------- -->
          <v-list-item v-else :key="i" :to="item.to" rounded="lg" class="mb-1">
            <span start class="span--start">
              <vue-feather
                :type="item.icon"
                class="feather-sm v-icon v-icon--size-default"
              ></vue-feather>
            </span>
            <v-list-item-title
              style="cursor: pointer"
              @click="handleOption(item)"
              dark
              v-text="item.title"
            ></v-list-item-title>
          </v-list-item>
          <!-- ---------------------------------------------- -->
          <!---End Single Item-->
          <!-- ---------------------------------------------- -->
        </template>
      </v-list>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
