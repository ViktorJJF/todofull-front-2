import axios from "axios";
import config from "@/config";

export default {
  list(query) {
    if (query && !query.sort && !query.order) {
      (query.sort = "createdAt"), (query.order = "desc");
    }
    return axios.get(
      config.DASHBOARD_BASE_URL + "/api/negotiation-statuses-logs",
      {
        params: query,
      }
    );
  },
  update(id, payload) {
    return axios.put(
      config.DASHBOARD_BASE_URL + `/api/negotiation-statuses-logs/${id}`,
      payload
    );
  },
  create(payload) {
    return axios.post(
      config.DASHBOARD_BASE_URL + "/api/negotiation-statuses-logs",
      payload
    );
  },
  delete(id) {
    return axios.delete(
      config.DASHBOARD_BASE_URL + `/api/negotiation-statuses-logs/${id}`
    );
  },
  listLastByLeadId({ leadId, cleanLeadId }) {
    return axios.get(
      config.DASHBOARD_BASE_URL +
        `/api/negotiation-statuses-logs/last-by-lead-id`,
      {
        params: { leadId, cleanLeadId },
      }
    );
  },
};
