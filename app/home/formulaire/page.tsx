"use client";

import dynamic from "next/dynamic";

const MultiStepForm = dynamic(() => import("./components/MultiStepForm"), {
  ssr: false,
  loading: () => (
    <p className="mt-8 text-center text-neutral-500">Chargement du formulaire…</p>
  ),
});

export default function Formulaire() {
  return (
    <main className="flex w-full grow flex-col items-center justify-center px-4 py-8">
      <h1 className="text-center text-3xl font-extrabold text-red-600 md:text-4xl">
        Formulaire de contrôle
      </h1>
      <MultiStepForm />
    </main>
  );
}
