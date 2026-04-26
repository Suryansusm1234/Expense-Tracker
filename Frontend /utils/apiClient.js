import axios from "axios";

function getApiBaseURL() {
  const raw = import.meta.env.VITE_API;
  if (!raw) return "/api";
  const trimmed = raw.replace(/\/+$/, "");
  return trimmed.endsWith("/api") ? trimmed : `${trimmed}/api`;
}

export const api = axios.create({
  baseURL: getApiBaseURL(),
  withCredentials: true,
  timeout: 4500,
});

