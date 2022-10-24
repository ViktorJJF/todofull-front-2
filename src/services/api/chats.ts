import axios from "axios";
import config from "@/config";

export default {
  list(query = { sort: "name", order: "1", limit: 10, page: 1 }) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/chats", {
      params: query,
    });
  },
  listOne(id) {
    return axios.get(config.DASHBOARD_BASE_URL + `/api/chats/${id}`);
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
  shortenLink(url) {
    return axios.post(`${config.DASHBOARD_BASE_URL}/api/chats/shorten-link`, { url })
  },
  undoPendingMessagesCount(id, count) {
    return axios.post(
      config.DASHBOARD_BASE_URL +
        `/api/chats/${id}/undo_pending_messages_count`,
      { count }
    );
  },
};
