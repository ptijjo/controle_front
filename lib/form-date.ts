/** Minuit local (sans décalage UTC). */
export function localStartOfToday(): Date {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}

/** Format attendu par `<input type="date" />` (calendrier grégorien local). */
export function dateToYMD(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function ymdToLocalDate(ymd: string): Date {
  const [yy, mm, dd] = ymd.split("-").map(Number);
  return new Date(yy, (mm ?? 1) - 1, dd ?? 1);
}
