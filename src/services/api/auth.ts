import axios from "axios";
import config from "@/config";

export default {
  login(email, password) {
    return axios.post(config.DASHBOARD_BASE_URL + "/api/login", {
      email,
      password,
    });
  },
  editUser(id, payload) {
    return axios.put(config.DASHBOARD_BASE_URL + `/api/users/${id}`, payload);
  },
  updatePassword(id, newPassword) {
    return axios.put(
      config.DASHBOARD_BASE_URL + `/api/users/${id}/update-password`,
      { newPassword }
    );
  },
  refreshToken() {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/token");
  },
  roleAuthorization(query) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/auth", {
      params: query,
    });
  },
};
