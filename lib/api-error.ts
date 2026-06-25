import axios from "axios";

/** Extrait un message lisible depuis une réponse Nest (string ou tableau). */
export function getApiErrorMessage(
  error: unknown,
  fallback = "Une erreur est survenue",
): string {
  if (!axios.isAxiosError(error)) {
    return error instanceof Error && error.message.trim()
      ? error.message
      : fallback;
  }
  const data = error.response?.data;
  if (data && typeof data === "object" && "message" in data) {
    const msg = (data as { message: unknown }).message;
    if (typeof msg === "string" && msg.trim()) return msg;
    if (Array.isArray(msg)) {
      const parts = msg.filter((m): m is string => typeof m === "string");
      if (parts.length) return parts.join(" ");
    }
  }
  if (error.response?.status === 401) {
    return "Session expirée. Veuillez vous reconnecter.";
  }
  if (error.code === "ERR_NETWORK") {
    return "Impossible de joindre le serveur. Vérifiez votre connexion.";
  }
  return fallback;
}
