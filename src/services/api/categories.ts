import axios from "axios";
import config from "@/config";

export default {
  list(query?: any) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/marketplace-categories", {
      params: query,
    });
  },
  listByMarketplaces(id) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/marketplace-categories/marketplaces/" + id);
  },

  listOneByMarketplace(id, categoryId) {
    return axios.get(config.DASHBOARD_BASE_URL + `/api/marketplace-categories/marketplaces/${id}/categories/${categoryId}`);
  },

  listOne(id: string) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/marketplace-categories/" + id);
  },
  update(id: string, item) {
    delete item._id;
    return axios.put(config.DASHBOARD_BASE_URL + `/api/marketplace-categories/${id}`, item);
  },
  create(item: any) {
    delete item._id;
    return axios.post(config.DASHBOARD_BASE_URL + "/api/marketplace-categories", item);
  },
  delete(id: string) {
    return axios.delete(config.DASHBOARD_BASE_URL + `/api/marketplace-categories/${id}`);
  },
};
