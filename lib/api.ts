import axios, {
  type AxiosError,
  type InternalAxiosRequestConfig,
} from "axios";
import { handleSessionExpired } from "./auth-session";
import {
  getAccessToken,
  getRefreshToken,
  updateSessionFromRefresh,
  type StoredUser,
} from "./auth-storage";

function apiBaseUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_API_URL?.trim() || "http://localhost:8585";
  return raw.replace(/\/$/, "");
}

export const api = axios.create({
  baseURL: apiBaseUrl(),
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

function shouldSkipRefreshRetry(url: string | undefined): boolean {
  if (!url) return true;
  return (
    url.includes("/auth/login") ||
    url.includes("/auth/refresh") ||
    url.includes("/auth/invitation/verify") ||
    url.includes("/auth/register")
  );
}

let refreshPromise: Promise<string | null> | null = null;

async function refreshAccessToken(): Promise<string | null> {
  const refresh = getRefreshToken();
  if (!refresh) {
    handleSessionExpired();
    return null;
  }
  try {
    const { data } = await axios.post<{
      access_token: string;
      refresh_token: string;
      user?: StoredUser;
    }>(
      `${apiBaseUrl()}/auth/refresh`,
      { refresh_token: refresh },
      { withCredentials: true, headers: { "Content-Type": "application/json" } },
    );
    updateSessionFromRefresh(data);
    return data.access_token;
  } catch {
    handleSessionExpired();
    return null;
  }
}

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const original = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };
    if (
      !original ||
      error.response?.status !== 401 ||
      original._retry ||
      shouldSkipRefreshRetry(original.url)
    ) {
      return Promise.reject(error);
    }

    if (!refreshPromise) {
      refreshPromise = refreshAccessToken().finally(() => {
        refreshPromise = null;
      });
    }
    const newAccess = await refreshPromise;
    if (!newAccess) {
      handleSessionExpired();
      return Promise.reject(error);
    }

    original._retry = true;
    original.headers.Authorization = `Bearer ${newAccess}`;
    return api(original);
  },
);
