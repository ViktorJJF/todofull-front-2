import axios from "axios";
import config from "@/config";

export default {
  createLabel(payload) {
    return axios.post(
      config.DASHBOARD_BASE_URL + "/api/graph-api/labels",
      payload
    );
  },
  getUserInformation(accessToken) {
    return axios.post(
      config.DASHBOARD_BASE_URL + "/api/graph-api/get-user-information",
      {
        access_token: accessToken,
      }
    );
  },
  getAudiences() {
    return axios.post(
      config.DASHBOARD_BASE_URL + "/api/graph-api/getAudiences"
    );
  },
  getInstagramPosts(fanpageId, next_page) {
    return axios.get(
      config.DASHBOARD_BASE_URL + "/api/graph-api/get-instagram-posts",
      {
        params: { fanpageId, next_page },
      }
    );
  },
  getFacebookPosts(fanpageId, next_page) {
    return axios.get("/api/graph-api/get-facebook-posts", {
      params: { fanpageId, next_page },
    });
  },
  deleteLabel(id, fanpageId) {
    return axios.delete(
      config.DASHBOARD_BASE_URL +
        `/api/graph-api/labels/${id}?fanpageId=${fanpageId}`
    );
  },
  getWhatsappMessageTemplates({ whats_app_business_account_id, botId }) {
    return axios.get(
      config.DASHBOARD_BASE_URL + `/api/graph-api/whatsapp/message-templates`,
      {
        params: {
          botId,
          whats_app_business_account_id,
        },
      }
    );
  },
  sendWhatsappMessageTemplates(
    to,
    template_name,
    dynamic_parameters,
    bot_id,
    cleanLeadId
  ) {
    return axios.post(
      config.DASHBOARD_BASE_URL +
        `/api/graph-api/whatsapp/send-message-templates`,
      {
        to,
        template_name,
        dynamic_parameters,
        bot_id,
        cleanLeadId,
      }
    );
  },
};
