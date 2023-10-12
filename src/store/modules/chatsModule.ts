import api from "@/services/api/chats";
import {
  buildSuccess,
  handleError,
  buildQueryWithPagination,
} from "@/utils/utils.js";

const module = {
  namespaced: true,
  state: {
    chats: [],
    messages: [],
    selectedChat: null,
    total: 0,
    totalPages: 0,
    hasToUpdateSelectedChat: false,
    hasPendingNegotiationStatus: false,
    filters: {
      negotiationStatusId: null,
      selectedSellTeamObject: null,
    },
    currentController: null,
  },
  actions: {
    list({ commit, state }, query) {
      let finalQuery = buildQueryWithPagination(query);
      commit("loadingModule/showLoading", true, { root: true });
      if (state.currentController) {
        state.currentController.abort();
      }
      // Create a new AbortController for the new request
      state.currentController = new AbortController();
      return new Promise((resolve, reject) => {
        api
          .list(finalQuery, state.currentController)
          .then((response) => {
            commit("loadingModule/showLoading", false, { root: true });
            commit("list", response.data.payload);
            commit("totalItems", response.data.totalDocs);
            commit("totalPages", response.data.totalPages);
            resolve(response.data.payload);
          })
          .catch((error) => {
            handleError(error, commit, reject);
          });
      });
    },
    listOne({ commit }, id) {
      return new Promise((resolve, reject) => {
        api
          .listOne(id)
          .then((res) => {
            commit("loadingModule/showLoading", true, { root: true });
            commit("setSelectedChat", res.data.payload);
            resolve(res.data.payload);
          })
          .catch((error) => {
            handleError(error, commit, reject);
          });
      });
    },
    create({ commit }, data) {
      return new Promise((resolve, reject) => {
        api
          .create(data)
          .then((res) => {
            commit("loadingModule/showLoading", true, { root: true });
            buildSuccess("Registro guardado con éxito");
            commit("create", res.data.payload);
            resolve(res.data.payload);
          })
          .catch((error) => {
            handleError(error, commit, reject);
          });
      });
    },
    update({ commit }, { id, data, notifyUser = true }: any = {}) {
      return new Promise((resolve, reject) => {
        api
          .update(id, data)
          .then((res) => {
            commit("loadingModule/showLoading", true, { root: true });
            if (notifyUser) {
              buildSuccess("Registro actualizado con éxito");
            }
            commit("update", {
              id,
              data: res.data.payload,
            });
            resolve(res.data.payload);
          })
          .catch((error) => {
            handleError(error, commit, reject);
          });
      });
    },
    delete({ commit }, id) {
      return new Promise((resolve, reject) => {
        api
          .delete(id)
          .then(() => {
            commit("loadingModule/showLoading", true, { root: true });
            buildSuccess("Registro eliminado con éxito");
            commit("delete", id);
            resolve(null);
          })
          .catch((error) => {
            handleError(error, commit, reject);
          });
      });
    },
    addProgrammedMessage({ commit }, { id, data, notifyUser = true }) {
      return new Promise((resolve, reject) => {
        api
          .addProgrammedMessage(id, data.programmedMessage)
          .then((res) => {
            if (notifyUser) {
              buildSuccess("Mensaje programado creado");
            }
            resolve(res.data.payload);
          })
          .catch((error) => {
            handleError(error, commit, reject);
          });
      });
    },
    deleteProgrammedMessage({ commit }, { chatId, programmedMessageId }) {
      return new Promise((resolve, reject) => {
        api
          .deleteProgrammedMessage(chatId, programmedMessageId)
          .then((res) => {
            buildSuccess("Mensaje programado borrado");
            resolve(res.data);
          })
          .catch((error) => {
            handleError(error, commit, reject);
          });
      });
    },
    removeNegotiationStatusProgramedMessages({ commit }, { chatId }) {
      return new Promise((resolve, reject) => {
        api
          .removeNegotiationStatusProgramedMessages(chatId)
          .then((res) => {
            resolve(res.data);
          })
          .catch((error) => {
            handleError(error, commit, reject);
          });
      });
    },
  },
  mutations: {
    list(state, data) {
      state.chats = data;
    },
    totalItems(state, data) {
      state.total = data;
    },
    totalPages(state, data) {
      state.totalPages = data;
    },
    create(state, data) {
      state.chats.push(data);
    },
    update(state, { id, data }) {
      let indexToUpdate = state.chats.findIndex((member) => member._id == id);
      state.chats.splice(indexToUpdate, 1, {
        ...data,
      });
    },
    delete(state, id) {
      let indexToDelete = state.chats.findIndex((member) => member._id == id);
      state.chats.splice(indexToDelete, 1);
      state.total -= 1;
    },
    setChats(state, data) {
      state.chats = data;
    },
    setSelectedChat(state, data) {
      state.selectedChat = data;
    },
    addChat(state, data) {
      const index = state.chats.findIndex((chat) => chat._id == data._id);
      if (index == -1) {
        state.chats.unshift({ ...data, pending_messages_count: 0 });
      }
    },
    addChatToEnd(state, data) {
      const index = state.chats.findIndex((chat) => chat._id == data._id);
      if (index == -1) {
        state.chats.push({
          ...data,
          pending_messages_count: data.pending_messages_count || 0,
        });
      }
    },
    deletedMessage(state, data) {
      let message = state.messages.find((el) => el.mid === data.mid);
      let messageIndex = state.messages.findIndex((el) => el.mid === data.mid);
      if (message) {
        message.text = "⚠️ No se pudo enviar el mensaje";
      }
    },
    updateHasToUpdateSelectedChat(state, data) {
      state.hasToUpdateSelectedChat = data;
    },

    setMessages(state, data) {
      state.messages = data;
    },
    addMessage(state, data) {
      state.messages.push(data);
    },
    deleteMessage(state, data) {
      let index = state.messages.findIndex((el) => el._id === data);
      state.messages.splice(index, 1);
    },
    updateFilter(state, { key, value }: { key: string; value: string }) {
      state.filters[key] = value;
    },
  },
  getters: {
    getChatById: (state) => (chatId) => {
      return state.chats.filter((chat) => chat._id === chatId);
    },
    getSortedChats: (state) => {
      // separate array chats with pending_messages_count
      const chatsWithPendingMessages = state.chats
        .filter((chat) => chat.pending_messages_count > 0)
        .sort((a, b) => b.updatedAt - a.updatedAt);
      const chatsWithoutPendingMessages = state.chats
        .filter((chat) => !chat.pending_messages_count)
        .sort((a, b) => b.updatedAt - a.updatedAt);
      return [...chatsWithPendingMessages, ...chatsWithoutPendingMessages];
    },
    getSelectedChat: (state) => {
      return state.selectedChat;
    },
  },
};

export default module;
