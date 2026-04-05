import Link from "next/link";

export default function OfflinePage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-[#f8f9fa] px-6 text-center">
      <h1 className="text-2xl font-semibold text-[#ac504f]">Hors ligne</h1>
      <p className="max-w-md text-neutral-700">
        Aucune connexion réseau. Vérifiez votre connexion internet puis réessayez.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-[#ac504f] px-5 py-2.5 text-white hover:opacity-90"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}
