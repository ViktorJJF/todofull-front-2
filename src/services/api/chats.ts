import axios from "axios";
import config from "@/config";

export default {
  list(
    query = { sort: "name", order: "1", limit: 10, page: 1 },
    abortController
  ) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/chats", {
      signal: abortController?.signal,
      params: query,
    });
  },
  listOne(id) {
    return axios.get(config.DASHBOARD_BASE_URL + `/api/chats/${id}`);
  },
  listPermissions() {
    return axios.get(config.DASHBOARD_BASE_URL + `/api/chats/permissions`);
  },
  listPermissionsByTeams(id) {
    return axios.get(
      config.DASHBOARD_BASE_URL + `/api/chats/permissions/teams/${id}`
    );
  },
  update(id, payload) {
    return axios.put(config.DASHBOARD_BASE_URL + `/api/chats/${id}`, payload);
  },
  create(payload) {
    return axios.post(config.DASHBOARD_BASE_URL + "/api/chats", payload);
  },
  delete(id) {
    return axios.delete(config.DASHBOARD_BASE_URL + `/api/chats/${id}`);
  },
  shortenLink(form) {
    return axios.post(
      `${config.DASHBOARD_BASE_URL}/api/chats/shorten-link`,
      form
    );
  },
  undoPendingMessagesCount(id, count) {
    return axios.post(
      config.DASHBOARD_BASE_URL +
        `/api/chats/${id}/undo_pending_messages_count`,
      { count }
    );
  },
  addUser(id, userId) {
    return axios.put(config.DASHBOARD_BASE_URL + `/api/chats/${id}/add_user`, {
      userId,
    });
  },
  addProgrammedMessage(id, programmedMessage) {
    return axios.post(
      config.DASHBOARD_BASE_URL + `/api/chats/${id}/add_programmed_message`,
      {
        programmedMessage,
      }
    );
  },
  deleteProgrammedMessage(chatId, programmedMessageId) {
    return axios.delete(
      config.DASHBOARD_BASE_URL +
        `/api/chats/${chatId}/delete_programmed_message/${programmedMessageId}`
    );
  },
};
