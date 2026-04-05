"use client";

import { useEffect, type ReactNode } from "react";

const SW_URL = "/serwist/sw.js";

export default function PwaProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    void navigator.serviceWorker.register(SW_URL, {
      scope: "/",
      type: "module",
    });
  }, []);

  return <>{children}</>;
}
