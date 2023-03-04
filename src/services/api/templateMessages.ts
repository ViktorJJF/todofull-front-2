import axios from "axios";
import config from "@/config";

export default {
  list(query = { sort: "name", order: "1" }) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/template-messages", {
      params: query,
    });
  },
  listByChat(query = { sort: "name", order: "1" }) {
    return axios.get(
      config.DASHBOARD_BASE_URL + "/api/template-messages/list-by-chat",
      {
        params: query,
      }
    );
  },
  update(id, payload) {
    return axios.put(
      config.DASHBOARD_BASE_URL + `/api/template-messages/${id}`,
      payload
    );
  },
  create(payload) {
    return axios.post(
      config.DASHBOARD_BASE_URL + "/api/template-messages",
      payload
    );
  },
  delete(id) {
    return axios.delete(
      config.DASHBOARD_BASE_URL + `/api/template-messages/${id}`
    );
  },
};
