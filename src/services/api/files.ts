import axios from "axios";
import config from "@/config";

export default {
  create(formData) {
    return axios.post(config.DASHBOARD_BASE_URL + "/api/files", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
