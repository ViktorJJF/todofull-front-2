import axios from "axios";
import config from "@/config";

export default {
  generateCompletionForConversation(conversationId) {
    return axios.post(
      config.DASHBOARD_BASE_URL + "/api/openai/conversation_completion",
      { conversationId }
    );
  },
  train() {
    return axios.post(config.DASHBOARD_BASE_URL + "/api/openai/train");
  },
};
