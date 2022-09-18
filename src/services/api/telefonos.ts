import axios from "axios";
import config from "@/config";

export default {
  list(query = { sort: "name", order: "1" }) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/telefonos", {
      params: query,
    });
  },
  listOne(id) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/telefonos/" + id);
  },
  update(id, payload) {
    return axios.put(
      config.DASHBOARD_BASE_URL + `/api/telefonos/${id}`,
      payload
    );
  },
  create(payload) {
    return axios.post(config.DASHBOARD_BASE_URL + "/api/telefonos", payload);
  },
  delete(id) {
    return axios.delete(config.DASHBOARD_BASE_URL + `/api/telefonos/${id}`);
  },
};
