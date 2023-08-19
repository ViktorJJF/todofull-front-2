import axios from "axios";
import config from "@/config";

export default {
  generateCompletionForConversation(conversationId, country) {
    return axios.post(
      config.DASHBOARD_BASE_URL + "/api/openai/conversation_completion",
      { conversationId, country }
    );
  },
};
