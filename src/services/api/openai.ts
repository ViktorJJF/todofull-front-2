import axios from "axios";
import config from "@/config";

export default {
  generateCompletionForConversation(conversationId, cleanLeadId, country) {
    return axios.post(
      config.DASHBOARD_BASE_URL + "/api/openai/conversation_completion",
      { conversationId, country, cleanLeadId }
    );
  },
};
