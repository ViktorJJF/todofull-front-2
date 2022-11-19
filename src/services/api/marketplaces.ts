import axios from "axios";
import config from "@/config";

export default {
  list(query = { sort: "nombre", order: "1" }) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/marketplaces", {
      params: query,
    });
  },
  listCategories(id) {
    return axios.get(
      config.DASHBOARD_BASE_URL + `/api/marketplaces/${id}/categories`
    );
  },
  listCategory(id, categoryId) {
    return axios.get(
      config.DASHBOARD_BASE_URL +
        `/api/marketplaces/${id}/categories/${categoryId}`
    );
  },
  listCategoryAttributes(id, categoryId) {
    return axios.get(
      config.DASHBOARD_BASE_URL +
        `/api/marketplaces/${id}/categories/${categoryId}/attributes`
    );
  },
  update(id, payload) {
    return axios.put(
      config.DASHBOARD_BASE_URL + `/api/marketplaces/${id}`,
      payload
    );
  },
  create(payload) {
    return axios.post(config.DASHBOARD_BASE_URL + "/api/marketplaces", payload);
  },
  delete(id, payload) {
    return axios.delete(config.DASHBOARD_BASE_URL + `/api/marketplaces/${id}`, {
      data: payload,
    });
  },
};
