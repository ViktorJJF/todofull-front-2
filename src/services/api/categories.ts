import axios from "axios";
import config from "@/config";

export default {
  list(query?: any) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/marketplace-categories", {
      params: query,
    });
  },
  listOne(id: string) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/marketplace-categories/" + id);
  },
  update(id: string, { name }) {
    return axios.put(config.DASHBOARD_BASE_URL + `/api/marketplace-categories/${id}`, { name });
  },
  create({ name, parent }: any) {
    return axios.post(config.DASHBOARD_BASE_URL + "/api/marketplace-categories", { name, parent });
  },
  delete(id: string) {
    return axios.delete(config.DASHBOARD_BASE_URL + `/api/marketplace-categories/${id}`);
  },
};
