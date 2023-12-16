import environment from "@/environment";

const DASHBOARD_BASE_URL: string =
  environment === "local"
    ? "http://localhost:5000"
    : environment === "development"
      ? "https://dev.todofull.club"
      : "https://todofull.club";
export default { DASHBOARD_BASE_URL };
