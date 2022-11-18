import axios from "axios";
import store from "@/store";
import config from "@/config";

export default {
  list(query: any = { sort: "createdAt", order: "1" }) {
    if (query.telefonoId === null) query.telefonoId = "";
    if (query.pais) {
      //filtro pais
      let filterCountries = "";
      for (const paisIndex of query.pais) {
        filterCountries += "pais=" + store.state.countries[paisIndex] + "&";
      }
      return axios.get(
        config.DASHBOARD_BASE_URL + "/api/leads?" + filterCountries,
        { params: query }
      );
    }
    return axios.get(config.DASHBOARD_BASE_URL + "/api/leads", {
      params: query,
    });
  },
  listAll(query: any = { sort: "createdAt", order: "1" }) {
    if (query.telefonoId === null) query.telefonoId = "";
    if (query.pais) {
      //filtro pais
      let filterCountries = "";
      for (const paisIndex of query.pais) {
        filterCountries += "pais=" + store.state.countries[paisIndex] + "&";
      }
      return axios.get(
        config.DASHBOARD_BASE_URL + "/api/leads/all?" + filterCountries,
        { params: query }
      );
    }
    return axios.get(config.DASHBOARD_BASE_URL + "/api/leads/all", {
      params: query,
    });
  },
  listOne(id) {
    return axios.get(config.DASHBOARD_BASE_URL + "/api/leads/" + id);
  },
  getByTodofullLabels(todoFullLabels, country, audienceId, showMissingLeads) {
    return axios.get(
      config.DASHBOARD_BASE_URL + "/api/leads/get-by-todofulllabels",
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
      config.DASHBOARD_BASE_URL + "/api/leads/send-to-audience",
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
    return axios.put(config.DASHBOARD_BASE_URL + `/api/leads/${id}`, payload);
  },
  create(payload) {
    return axios.post(config.DASHBOARD_BASE_URL + "/api/leads", payload);
  },
  delete(id) {
    return axios.delete(config.DASHBOARD_BASE_URL + `/api/leads/${id}`);
  },
  addTodofullLabelsByChildren(childrenIds = [], leadId) {
    return axios.post(
      config.DASHBOARD_BASE_URL + `/api/leads/add-todofulllabels-by-children`,
      {
        childrenIds,
        leadId,
      }
    );
  },
};
