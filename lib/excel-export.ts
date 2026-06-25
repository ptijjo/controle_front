import axios from "axios";
import { api } from "./api";
import { paths } from "./paths";

/**
 * Télécharge `controle.xlsx` via `GET /formulaire/export` (alias back : `/formulaire/telecharger`).
 * Jeton Bearer géré par `api`. Lance une `Error` lisible si échec (404 JSON Nest, 401, etc.).
 */
export async function downloadControleExcel(): Promise<void> {
  try {
    const res = await api.get<Blob>(paths.formulaireExport, {
      responseType: "blob",
      transformRequest: [
        (_data, headers) => {
          if (headers && typeof headers === "object") {
            delete (headers as Record<string, unknown>)["Content-Type"];
          }
          return undefined;
        },
      ],
    });

    const ct = String(res.headers["content-type"] ?? "").toLowerCase();
    if (ct.includes("application/json")) {
      const text = await res.data.text();
      throw new Error(parseNestMessage(text));
    }

    const blob =
      res.data instanceof Blob
        ? res.data
        : new Blob([res.data], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "controle.xlsx";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.data instanceof Blob) {
      const text = await e.response.data.text();
      throw new Error(parseNestMessage(text));
    }
    throw e instanceof Error ? e : new Error("Téléchargement impossible.");
  }
}

function parseNestMessage(jsonText: string): string {
  try {
    const j = JSON.parse(jsonText) as { message?: unknown };
    if (typeof j.message === "string" && j.message.trim()) return j.message;
    if (Array.isArray(j.message)) {
      const parts = j.message.filter((m): m is string => typeof m === "string");
      if (parts.length) return parts.join(" ");
    }
  } catch {
    /* ignore */
  }
  return "Impossible de télécharger le fichier.";
}
