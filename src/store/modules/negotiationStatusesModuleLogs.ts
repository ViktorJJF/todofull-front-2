import api from "@/services/api/negotiationStatusesLogs";
import {
  buildSuccess,
  handleError,
  buildQueryWithPagination,
} from "@/utils/utils.js";

const module = {
  namespaced: true,
  state: {
    negotiationStatusesLogs: [],
    messages: [],
    selectedChat: null,
    total: 0,
    totalPages: 0,
  },
  actions: {
    list({ commit }, query) {
      let finalQuery = buildQueryWithPagination(query);
      commit("loadingModule/showLoading", true, { root: true });
      return new Promise((resolve, reject) => {
        api
          .list(finalQuery)
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
  },
  mutations: {
    list(state, data) {
      state.negotiationStatusesLogs = data;
    },
    totalItems(state, data) {
      state.total = data;
    },
    totalPages(state, data) {
      state.totalPages = data;
    },
    create(state, data) {
      state.negotiationStatusesLogs.push(data);
    },
    update(state, { id, data }) {
      let indexToUpdate = state.negotiationStatusesLogs.findIndex(
        (member) => member._id == id
      );
      state.negotiationStatusesLogs.splice(indexToUpdate, 1, {
        ...data,
      });
    },
    delete(state, id) {
      let indexToDelete = state.negotiationStatusesLogs.findIndex(
        (member) => member._id == id
      );
      state.negotiationStatusesLogs.splice(indexToDelete, 1);
      state.total -= 1;
    },
    setnegotiationStatusesLogs(state, data) {
      state.negotiationStatusesLogs = data;
    },
    setSelectedChat(state, data) {
      state.selectedChat = data;
    },
    addChat(state, data) {
      const index = state.negotiationStatusesLogs.findIndex(
        (chat) => chat._id == data._id
      );
      if (index == -1) {
        state.negotiationStatusesLogs.unshift({
          ...data,
          pending_messages_count: 0,
        });
      }
    },
    addChatToEnd(state, data) {
      const index = state.negotiationStatusesLogs.findIndex(
        (chat) => chat._id == data._id
      );
      if (index == -1) {
        state.negotiationStatusesLogs.push({
          ...data,
          pending_messages_count: 0,
        });
      }
    },
    deletedMessage(state, data) {
      let message = state.messages.find((el) => el.mid === data.mid);
      if (message) {
        message.isActive = false;
      }
    },

    setMessages(state, data) {
      state.messages = data;
    },
    addMessage(state, data) {
      state.messages.push(data);
    },
  },
  getters: {
    getChatById: (state) => (chatId) => {
      return state.negotiationStatusesLogs.filter(
        (chat) => chat._id === chatId
      );
    },
    getSortednegotiationStatusesLogs: (state) => {
      return state.negotiationStatusesLogs.sort(
        (a, b) => b.updatedAt - a.updatedAt
      );
    },
  },
};

export default module;
