"use client";

import dynamic from "next/dynamic";

const AjouterUtilisateurInner = dynamic(
  () => import("./AjouterUtilisateurInner"),
  {
    ssr: false,
    loading: () => (
      <main className="flex min-h-[40vh] w-full items-center justify-center text-neutral-500">
        Chargement…
      </main>
    ),
  },
);

export default function AjouterUtilisateurPage() {
  return <AjouterUtilisateurInner />;
}
