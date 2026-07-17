"use client";

import { FaFileExcel, FaUser, FaUserPlus, FaSignOutAlt, FaWpforms } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/query-keys";
import { paths } from "@/lib/paths";
import { api } from "@/lib/api";
import { downloadControleExcel } from "@/lib/excel-export";
import { clearAuthSession } from "@/lib/auth-storage";
import { useUser } from "./context/UserContext";
import { Button } from "@/components/ui/button";

const Home = () => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [loggingOut, setLoggingOut] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);
  const canAddUser =
    user && (user.role === "controleur" || user.role === "chef_service");
  const canSeeUsers =
    user && (user.role === "controleur" || user.role === "chef_service");
  const canExportExcel =
    user && (user.role === "controleur" || user.role === "chef_service");

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await api.post(paths.authLogout);
    } catch {
      /* déconnexion locale même si l’API échoue */
    } finally {
      clearAuthSession();
      queryClient.clear();
      setUser(null);
      setLoggingOut(false);
      router.push("/");
    }
  };

  const handleExportExcel = async () => {
    setExportError(null);
    setExporting(true);
    try {
      await downloadControleExcel();
    } catch (e) {
      setExportError(
        e instanceof Error ? e.message : "Téléchargement impossible.",
      );
    } finally {
      setExporting(false);
    }
  };

  return (
    <main className="relative flex min-h-screen w-full grow flex-col items-center justify-center gap-8 px-4 py-10 md:gap-12 md:py-14">
      <Button
        type="button"
        onClick={handleLogout}
        disabled={loggingOut}
        variant="outline"
        className="fixed right-3 top-3 z-50 gap-2 border-neutral-300 bg-white/95 text-neutral-800 shadow-sm backdrop-blur-sm hover:bg-neutral-50 md:right-5 md:top-5"
      >
        <FaSignOutAlt className="size-4" />
        {loggingOut ? "Déconnexion…" : "Déconnexion"}
      </Button>
      <h1 className="text-center text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
        Contrôle
      </h1>
      <div className="flex w-full max-w-4xl flex-col flex-wrap items-center justify-center gap-8 md:flex-row md:gap-10 lg:gap-12">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <Link
            href="/home/formulaire"
            className="transition-transform hover:scale-105 active:scale-100"
            aria-label="Nouveau formulaire de contrôle"
          >
            <FaWpforms className="cursor-pointer text-6xl text-red-600 hover:text-red-500 md:text-7xl lg:text-8xl" aria-hidden />
          </Link>
          <p className="text-center text-sm md:text-base">Nouveau formulaire</p>
        </div>
        {canExportExcel && (
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <button
            type="button"
            onClick={handleExportExcel}
            disabled={exporting}
            className="transition-transform hover:scale-105 active:scale-100 disabled:pointer-events-none disabled:opacity-50"
            aria-busy={exporting}
            aria-label="Télécharger l’extraction Excel des contrôles"
          >
            <FaFileExcel className="cursor-pointer text-6xl text-red-600 hover:text-red-500 md:text-7xl lg:text-8xl" aria-hidden />
          </button>
          <p className="text-center text-sm md:text-base">
            {exporting ? "Téléchargement…" : "Extraction de données"}
          </p>
          {exportError && (
            <p className="max-w-xs text-center text-xs text-red-600">{exportError}</p>
          )}
        </div>
        )}
        {canAddUser && (
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <Link
              href="/home/ajouter-utilisateur"
              className="transition-transform hover:scale-105 active:scale-100"
              aria-label="Inviter un utilisateur"
            >
              <FaUserPlus className="cursor-pointer text-6xl text-red-600 hover:text-red-500 md:text-7xl lg:text-8xl" aria-hidden />
            </Link>
            <p className="text-center text-sm md:text-base">Inviter un utilisateur</p>
          </div>
        )}
        {canSeeUsers && (
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <Link
              href="/home/user"
              className="transition-transform hover:scale-105 active:scale-100"
              aria-label="Liste des utilisateurs"
            >
              <FaUser className="cursor-pointer text-6xl text-red-600 hover:text-red-500 md:text-7xl lg:text-8xl" aria-hidden />
            </Link>
            <p className="text-center text-sm md:text-base">Liste des utilisateurs</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
