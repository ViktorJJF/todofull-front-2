import axios from "axios";
import config from "@/config";

export default {
  list(query, options = { sort: "createdAt", order: "1" }) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/ecommerces/", {
      params: {
        ...query,
        ...options,
      },
    });
  },
};
