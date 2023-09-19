import { createStore } from "vuex";

import modules from "./modules";

export default createStore({
  modules,
  state: {
    isChatOneToOne: false,
    itemsPerPage: 30,
    snackbar: {
      text: "",
      active: false,
      color: "success",
    },
    toolbar: {
      drawerIcon: null,
    },
    overlay: {
      active: false,
    },
    selectedTelefono: {
      numero: "",
      googleContactEmail: "",
      credenciales: {
        clientId: "",
        clientSecret: "",
        access_token: "",
        refresh_token: "",
        scope: "",
        token_type: "",
        id_token: "",
        expiry_date: "",
      },
      agenteId: "",
    },
    selectedCommentFacebook: {},
    countries: ["Peru", "Chile", "Colombia"],
    maxPaginationButtons: 16,
    facebookAccessToken: "",
    facebookName: "",
  },
  mutations: {
    showOverlay(state, active) {
      state.overlay.active = active;
    },
    setIsChatOneToOne(state, isChatOneToOne) {
      state.isChatOneToOne = isChatOneToOne;
    },
    setSelectedTelefono(state, payload) {
      state.selectedTelefono = payload;
    },
  },
  actions: {
    showOverlay({ commit }, active) {
      commit("showOverlay", active);
    },
  },
});
