import axios from "axios";
import config from "@/config";

export default {
  list(query) {
    if (query && !query.sort && !query.order) {
      (query.sort = "createdAt"), (query.order = "desc");
    }
    return axios.get(config.DASHBOARD_BASE_URL + "/api/todofull-labels", {
      params: query,
    });
  },
  update(id, payload) {
    return axios.put(
      config.DASHBOARD_BASE_URL + `/api/todofull-labels/${id}`,
      payload
    );
  },
  create(payload) {
    return axios.post(
      config.DASHBOARD_BASE_URL + "/api/todofull-labels",
      payload
    );
  },
  delete(id) {
    return axios.delete(
      config.DASHBOARD_BASE_URL + `/api/todofull-labels/${id}`
    );
  },
};
