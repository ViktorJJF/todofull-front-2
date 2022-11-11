import axios from "axios";
import config from "@/config";

export default {
  list(query = { sort: "nombre", order: "1" }) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/marketplace-attributes", { params: query });
  },
  update(id, payload) {
    return axios.put(config.DASHBOARD_BASE_URL + `/api/marketplace-attributes/${id}`, payload);
  },
  create(payload) {
    return axios.post(config.DASHBOARD_BASE_URL + "/api/marketplace-attributes", payload);
  },
  delete(id, payload) {
    return axios.delete(config.DASHBOARD_BASE_URL + `/api/marketplace-attributes/${id}`, { data: payload });
  },
};
