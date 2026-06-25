"use client";

import dynamic from "next/dynamic";

const EnregistrementInner = dynamic(() => import("./EnregistrementInner"), {
  ssr: false,
  loading: () => (
    <main className="flex min-h-screen w-full items-center justify-center px-4 py-8 text-neutral-500">
      Chargement…
    </main>
  ),
});

export default function EnregistrementPage() {
  return <EnregistrementInner />;
}
