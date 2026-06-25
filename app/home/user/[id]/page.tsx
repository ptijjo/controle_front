"use client";

import { User } from "@/interface/user.interface";
import { paths } from "@/lib/paths";
import { api } from "@/lib/api";
import { getApiErrorMessage } from "@/lib/api-error";
import { queryKeys } from "@/lib/query-keys";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FaArrowLeft } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const ROLES = [
  { value: "controleur", label: "Contrôleur" },
  { value: "chef_service", label: "Chef de service" },
  { value: "agent", label: "Agent" },
] as const;

const UserPage = () => {
  const { id } = useParams();
  const userId = typeof id === "string" ? id : "";
  const router = useRouter();
  const queryClient = useQueryClient();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const {
    data: user,
    isLoading,
    isError,
    error: fetchError,
  } = useQuery({
    queryKey: queryKeys.users.detail(userId),
    queryFn: async () => {
      const res = await api.get<User>(`${paths.users}/${userId}`);
      return res.data;
    },
    enabled: userId.length > 0,
  });

  useEffect(() => {
    if (user) setSelectedRole(user.role);
  }, [user]);

  useEffect(() => {
    if (!modalOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [modalOpen]);

  const patchRoleMutation = useMutation({
    mutationFn: async (role: string) => {
      const res = await api.patch<User>(`${paths.users}/${userId}`, { role });
      return res.data;
    },
    onSuccess: (updated) => {
      queryClient.setQueryData(queryKeys.users.detail(userId), updated);
      void queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
      setModalOpen(false);
      setError(null);
    },
    onError: (err) => {
      setError(
        getApiErrorMessage(err, "Erreur lors de la mise à jour du rôle"),
      );
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      await api.delete(`${paths.users}/${userId}`);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
      router.push("/home/user");
    },
    onError: (err) => {
      setDeleteError(
        getApiErrorMessage(
          err,
          "Impossible de supprimer cet utilisateur (droits insuffisants ou erreur serveur).",
        ),
      );
    },
  });

  const handleSaveRole = async () => {
    if (!user || selectedRole === user.role) {
      setModalOpen(false);
      return;
    }
    setError(null);
    patchRoleMutation.mutate(selectedRole);
  };

  const handleDeleteUser = async () => {
    if (!user) return;
    if (
      !window.confirm(
        `Supprimer définitivement l'utilisateur ${user.nom} ${user.prenom} (${user.email}) ? Cette action est irréversible.`,
      )
    ) {
      return;
    }
    setDeleteError(null);
    deleteMutation.mutate();
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen w-full grow flex-col items-center justify-center px-4 py-8">
        <p className="text-gray-500" role="status" aria-live="polite">
          Chargement…
        </p>
      </main>
    );
  }

  if (isError || !user) {
    return (
      <main className="flex min-h-screen w-full grow flex-col items-center justify-center px-4 py-8">
        <p className="text-center text-red-600" role="alert">
          {getApiErrorMessage(
            fetchError,
            "Utilisateur introuvable ou accès refusé.",
          )}
        </p>
        <Link
          href="/home/user"
          className="mt-4 text-sm font-medium text-red-700 hover:underline"
        >
          Retour à la liste
        </Link>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen w-full grow flex-col px-4 py-8">
      <div className="mx-auto w-full max-w-md">
        <Link
          href="/home/user"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-red-600"
        >
          <FaArrowLeft className="size-3.5" aria-hidden />
          Liste des utilisateurs
        </Link>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
          <h1 className="mb-1 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            {user.nom} {user.prenom}
          </h1>
          <p className="mb-6 text-center text-sm text-gray-600">{user.email}</p>

          <div className="flex flex-col items-center gap-2 border-t border-gray-100 pt-6">
            <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Rôle
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedRole(user.role);
                setModalOpen(true);
              }}
              className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              {user.role}
            </button>
            <p className="text-center text-xs text-gray-400">
              Cliquez pour modifier le rôle
            </p>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-6">
            <Button
              type="button"
              variant="destructive"
              onClick={handleDeleteUser}
              disabled={deleteMutation.isPending}
              className="w-full bg-red-700 text-white hover:bg-red-600"
            >
              {deleteMutation.isPending ? "Suppression…" : "Supprimer l'utilisateur"}
            </Button>
            {deleteError && (
              <p className="mt-2 text-center text-sm text-red-600" role="alert">
                {deleteError}
              </p>
            )}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/50 p-4"
          onClick={() => !patchRoleMutation.isPending && setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="modal-title"
              className="mb-4 text-center text-xl font-bold text-gray-900"
            >
              Modifier le rôle
            </h2>
            <p className="mb-4 text-center text-sm text-gray-600">
              {user.nom} {user.prenom}
            </p>
            <div className="space-y-2">
              <Label htmlFor="role-select" className="text-gray-700">
                Rôle
              </Label>
              <Select
                value={selectedRole}
                onValueChange={setSelectedRole}
                disabled={patchRoleMutation.isPending}
              >
                <SelectTrigger
                  id="role-select"
                  className="w-full border-gray-300 bg-white"
                >
                  <SelectValue placeholder="Choisir un rôle" />
                </SelectTrigger>
                <SelectContent className="z-100 border-gray-200 bg-white shadow-lg">
                  {ROLES.map((r) => (
                    <SelectItem key={r.value} value={r.value}>
                      {r.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {error && (
              <p className="mt-3 text-center text-sm text-red-600" role="alert">
                {error}
              </p>
            )}
            <div className="mt-6 flex flex-row justify-end gap-3">
              <Button
                type="button"
                onClick={() => setModalOpen(false)}
                disabled={patchRoleMutation.isPending}
                className="bg-gray-500 text-white hover:bg-gray-400"
              >
                Annuler
              </Button>
              <Button
                type="button"
                onClick={handleSaveRole}
                disabled={
                  patchRoleMutation.isPending || selectedRole === user.role
                }
                className="bg-red-600 text-white hover:bg-red-500 disabled:opacity-50"
              >
                {patchRoleMutation.isPending ? "Enregistrement…" : "Enregistrer"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default UserPage;
