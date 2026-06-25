import { clearAuthSession } from "./auth-storage";

/** Routes nécessitant une session (redirection vers `/` si token invalide). */
function isProtectedPath(pathname: string): boolean {
  return pathname.startsWith("/home");
}

/**
 * Efface la session et renvoie vers la page de connexion si l’utilisateur
 * était sur une zone protégée.
 */
export function handleSessionExpired(): void {
  clearAuthSession();
  if (typeof window === "undefined") return;
  if (isProtectedPath(window.location.pathname)) {
    window.location.replace("/");
  }
}
