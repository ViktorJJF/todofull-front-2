import { defineStore } from "pinia";

interface State {
  sidebarDrawer: boolean
}

export const useChatSidebarStore = defineStore({
  id: "chatSidebar",
  state: (): State => ({
    sidebarDrawer: false,
  }),

  getters: {},
  actions: {
    SET_SIDEBAR_DRAWER() {
      this.sidebarDrawer = !this.sidebarDrawer;
    },
  },
});
