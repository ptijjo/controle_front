"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";

export default function PwaProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    /* Service worker désactivé : ajoutez Serwist si besoin hors-ligne. */
  }, []);

  return <>{children}</>;
}
