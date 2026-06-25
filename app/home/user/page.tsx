"use client";

import { User } from "@/interface/user.interface";
import { paths } from "@/lib/paths";
import { api } from "@/lib/api";
import { getApiErrorMessage } from "@/lib/api-error";
import { queryKeys } from "@/lib/query-keys";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

const UserPage = () => {
  const { data: users = [], isLoading, error } = useQuery({
    queryKey: queryKeys.users.all,
    queryFn: async () => {
      const res = await api.get<User[]>(paths.users);
      return res.data;
    },
  });

  return (
    <main className="flex min-h-screen w-full grow flex-col px-4 py-8">
      <div className="mx-auto w-full max-w-2xl">
        <Link
          href="/home"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-red-600"
        >
          <FaArrowLeft className="size-3.5" aria-hidden />
          Retour à l&apos;accueil
        </Link>

        <h1 className="mb-6 text-center text-3xl font-bold md:mb-8 md:text-4xl">
          Liste des utilisateurs
        </h1>

        {isLoading && (
          <p className="py-12 text-center text-gray-500" role="status" aria-live="polite">
            Chargement des utilisateurs…
          </p>
        )}

        {error && (
          <p className="py-8 text-center text-sm text-red-600" role="alert">
            {getApiErrorMessage(error, "Impossible de charger la liste des utilisateurs.")}
          </p>
        )}

        {!isLoading && !error && (
          <div className="flex flex-col gap-3">
            {users.map((user) => (
              <Link
                href={`/home/user/${user.id}`}
                key={user.id}
                className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-all hover:border-red-200 hover:shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-lg font-bold text-gray-800">
                    {user.nom} {user.prenom}
                  </h2>
                  <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white">
                    {user.role}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{user.email}</p>
              </Link>
            ))}
          </div>
        )}

        {!isLoading && !error && users.length === 0 && (
          <p className="py-12 text-center text-gray-500">
            Aucun utilisateur à afficher.
          </p>
        )}
      </div>
    </main>
  );
};

export default UserPage;
