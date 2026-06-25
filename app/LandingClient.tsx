"use client";

import dynamic from "next/dynamic";

const LoginPage = dynamic(() => import("./components/LoginPage"), {
  ssr: false,
  loading: () => (
    <div className="flex h-48 w-full max-w-md items-center justify-center rounded-2xl border border-neutral-200 bg-white/80 text-sm text-neutral-500">
      Chargement…
    </div>
  ),
});

export default function LandingClient() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-linear-to-b from-neutral-50 to-white px-4 py-10 md:gap-8 md:py-14">
      <div className="flex w-full max-w-2xl flex-col items-center gap-2 text-center">
        <h1 className="text-balance text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl lg:text-4xl">
          Formulaire de contrôle
        </h1>
      </div>
      <LoginPage />
    </main>
  );
}
