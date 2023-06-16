import { defineStore } from "pinia";

interface State {
  sidebarDrawer: boolean;
  bot: any;
}

export const useChatSidebarStore = defineStore({
  id: "chatSidebar",
  state: (): State => ({
    sidebarDrawer: false,
    bot: null,
  }),

  getters: {},
  actions: {
    SET_SIDEBAR_DRAWER() {
      this.sidebarDrawer = !this.sidebarDrawer;
    },
    SET_CURRENT_BOT(payload: any) {
      this.bot = payload;
    },
  },
});
