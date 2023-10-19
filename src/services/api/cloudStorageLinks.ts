import axios from "axios";
import config from "@/config";

export default {
  list(query?: any) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/cloud-storage-links", {
      params: query,
    });
  },
  listOne(id: string) {
    return axios.get(
      config.DASHBOARD_BASE_URL + "/api/cloud-storage-links/" + id
    );
  },
  update(id: string, item) {
    return axios.put(
      config.DASHBOARD_BASE_URL + `/api/cloud-storage-links/${id}`,
      item
    );
  },

  create(item: any) {
    return axios.post(
      config.DASHBOARD_BASE_URL + "/api/cloud-storage-links",
      item
    );
  },
  delete(id: string) {
    return axios.delete(
      config.DASHBOARD_BASE_URL + `/api/cloud-storage-links/${id}`
    );
  },
  increaseTimesUsed(id: string) {
    return axios.post(
      config.DASHBOARD_BASE_URL +
        `/api/cloud-storage-links/${id}/increase_times_used`
    );
  },
};
