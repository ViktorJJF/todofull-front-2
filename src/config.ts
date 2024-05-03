import environment from "@/environment";

const DASHBOARD_BASE_URL: string =
  environment === "local"
    ? "http://localhost:5000"
    : environment === "development"
      ? "https://dev.todofull.club"
      : "https://todofull.club";
const CHAT_BASE_URL: string =
  environment === "local"
    ? "http://localhost:3031"
    : environment === "development"
      ? "https://dev.chat-2.todofull.club"
      : "https://chat-2.todofull.club";
export default { DASHBOARD_BASE_URL, CHAT_BASE_URL };
