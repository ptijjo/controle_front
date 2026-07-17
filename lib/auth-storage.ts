const ACCESS = "controle_access_token";
const USER = "controle_user";
const SESSION_FLAG = "controle_session";

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

function setSessionFlag(on: boolean): void {
  if (typeof document === "undefined") return;
  if (on) {
    document.cookie = `${SESSION_FLAG}=1; path=/; SameSite=Lax`;
  } else {
    document.cookie = `${SESSION_FLAG}=; path=/; Max-Age=0; SameSite=Lax`;
  }
}

export function getAccessToken(): string | null {
  if (!isBrowser()) return null;
  return sessionStorage.getItem(ACCESS);
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

/** Access en sessionStorage uniquement ; refresh = cookie httpOnly API. */
export function setAuthSession(access: string, user: StoredUser): void {
  if (!isBrowser()) return;
  sessionStorage.setItem(ACCESS, access);
  sessionStorage.setItem(USER, JSON.stringify(user));
  setSessionFlag(true);
}

export function updateSessionFromRefresh(payload: {
  access_token: string;
  user?: StoredUser;
}): void {
  if (!isBrowser()) return;
  sessionStorage.setItem(ACCESS, payload.access_token);
  if (payload.user) {
    sessionStorage.setItem(USER, JSON.stringify(payload.user));
  }
  setSessionFlag(true);
}

export function clearAuthSession(): void {
  if (!isBrowser()) return;
  sessionStorage.removeItem(ACCESS);
  sessionStorage.removeItem(USER);
  // legacy cleanup
  sessionStorage.removeItem("controle_refresh_token");
  setSessionFlag(false);
}
