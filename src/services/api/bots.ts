import axios from "axios";
import config from "@/config";

export default {
  list(query = { sort: "createdAt", order: "1" }) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/bots", {
      params: query,
    });
  },
  listOne(id) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/bots/" + id);
  },
  update(id, payload) {
    return axios.put(config.DASHBOARD_BASE_URL + `/api/bots/${id}`, payload);
  },
  create(payload) {
    return axios.post(config.DASHBOARD_BASE_URL + "/api/bots", payload);
  },
  delete(id) {
    return axios.delete(config.DASHBOARD_BASE_URL + `/api/bots/${id}`);
  },
};
