import environment from "@/environment";

const DASHBOARD_BASE_URL: string =
  environment === "local"
    ? "http://localhost:5000"
    : environment === "development"
      ? "https://dev.todofull.club"
      : "https://todofull.club";
console.log("DASHBOARD_BASE_URL", DASHBOARD_BASE_URL)
export default { DASHBOARD_BASE_URL };
