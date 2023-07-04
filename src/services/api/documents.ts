import axios from "axios";
import config from "@/config";

export default {
  list(query = { sort: "createdAt", order: "1" }) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/documents", {
      params: query,
    });
  },
  listOne(id) {
    return axios.get(config.DASHBOARD_BASE_URL + `/api/documents/${id}`);
  },
  update(id, payload) {
    return axios.put(
      config.DASHBOARD_BASE_URL + `/api/documents/${id}`,
      payload
    );
  },
  create(payload) {
    return axios.post(config.DASHBOARD_BASE_URL + "/api/documents", payload);
  },
  delete(id) {
    return axios.delete(config.DASHBOARD_BASE_URL + `/api/documents/${id}`);
  },
};
