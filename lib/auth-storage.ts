const ACCESS = "controle_access_token";
const REFRESH = "controle_refresh_token";
const USER = "controle_user";

export type StoredUser = {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  role: string;
};

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof sessionStorage !== "undefined";
}

export function getAccessToken(): string | null {
  if (!isBrowser()) return null;
  return sessionStorage.getItem(ACCESS);
}

export function getRefreshToken(): string | null {
  if (!isBrowser()) return null;
  return sessionStorage.getItem(REFRESH);
}

export function getStoredUser(): StoredUser | null {
  if (!isBrowser()) return null;
  const raw = sessionStorage.getItem(USER);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StoredUser;
  } catch {
    return null;
  }
}

export function setAuthSession(
  access: string,
  refresh: string,
  user: StoredUser,
): void {
  if (!isBrowser()) return;
  sessionStorage.setItem(ACCESS, access);
  sessionStorage.setItem(REFRESH, refresh);
  sessionStorage.setItem(USER, JSON.stringify(user));
}

export function updateSessionFromRefresh(payload: {
  access_token: string;
  refresh_token: string;
  user?: StoredUser;
}): void {
  if (!isBrowser()) return;
  sessionStorage.setItem(ACCESS, payload.access_token);
  sessionStorage.setItem(REFRESH, payload.refresh_token);
  if (payload.user) {
    sessionStorage.setItem(USER, JSON.stringify(payload.user));
  }
}

export function clearAuthSession(): void {
  if (!isBrowser()) return;
  sessionStorage.removeItem(ACCESS);
  sessionStorage.removeItem(REFRESH);
  sessionStorage.removeItem(USER);
}
