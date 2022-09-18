import axios from "axios";
import store from "@/store";
import config from "@/config";

export default {
  list(query = { sort: "createdAt", order: "1" }) {
    if (query.telefonoId === null) query.telefonoId = "";
    if (query.todofullLabels) {
      query.todofullLabels = JSON.stringify(query.todofullLabels);
    }
    if (query.countries) {
      query.countries = JSON.stringify(query.countries);
    }
    return axios.get(config.DASHBOARD_BASE_URL + "/api/clean-leads", {
      params: query,
    });
  },
  listAll(query = { sort: "createdAt", order: "1" }) {
    if (query.telefonoId === null) query.telefonoId = "";
    if (query.pais) {
      //filtro pais
      let filterCountries = "";
      for (const paisIndex of query.pais) {
        filterCountries += "pais=" + store.state.countries[paisIndex] + "&";
      }
      return axios.get(
        config.DASHBOARD_BASE_URL + "/api/clean-leads/all?" + filterCountries,
        {
          params: query,
        }
      );
    }
    return axios.get(config.DASHBOARD_BASE_URL + "/api/clean-leads/all", {
      params: query,
    });
  },
  listOne(id) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/clean-leads/" + id);
  },
  getByTodofullLabels(todoFullLabels, country, audienceId, showMissingLeads) {
    return axios.get(
      config.DASHBOARD_BASE_URL + "/api/clean-leads/get-by-todofulllabels",
      {
        params: {
          todoFullLabels: JSON.stringify(todoFullLabels),
          country,
          audienceId,
          showMissingLeads,
        },
      }
    );
  },
  sendLeadsToAudience(
    audienceId,
    facebookAudienceId,
    todoFullLabels,
    showMissingLeads,
    country
  ) {
    return axios.post(
      config.DASHBOARD_BASE_URL + "/api/clean-leads/send-to-audience",
      {
        audienceId,
        facebookAudienceId,
        todoFullLabels,
        showMissingLeads,
        country,
      }
    );
  },
  update(id, payload) {
    return axios.put(
      config.DASHBOARD_BASE_URL + `/api/clean-leads/${id}`,
      payload
    );
  },
  create(payload) {
    return axios.post(config.DASHBOARD_BASE_URL + "/api/clean-leads", payload);
  },
  delete(id) {
    return axios.delete(config.DASHBOARD_BASE_URL + `/api/clean-leads/${id}`);
  },
};
