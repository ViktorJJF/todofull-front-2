const isDev: boolean =
  window.location.hostname === "localhost" || !window.location.hostname;

const DASHBOARD_BASE_URL: string = isDev
  ? "http://localhost:5000"
  : "https://todofull.club";

export default { DASHBOARD_BASE_URL };
