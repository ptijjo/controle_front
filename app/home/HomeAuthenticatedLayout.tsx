"use client";

import { User } from "@/interface/user.interface";
import { paths } from "@/lib/paths";
import { api } from "@/lib/api";
import { queryKeys } from "@/lib/query-keys";
import { UserProvider } from "./context/UserContext";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

export default function HomeAuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const navigate = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const { data, isError, isLoading } = useQuery({
    queryKey: queryKeys.auth.me,
    queryFn: async () => {
      const res = await api.get<User>(paths.authMe);
      return res.data;
    },
    retry: false,
  });

  useEffect(() => {
    if (data) setUser(data);
  }, [data]);

  useEffect(() => {
    if (isError) navigate.push("/");
  }, [isError, navigate]);

  if (isLoading && !user) {
    return (
      <div
        className="mx-auto flex min-h-[40vh] w-full max-w-6xl items-center justify-center px-4"
        role="status"
        aria-live="polite"
      >
        <p className="text-neutral-600">Chargement de votre session…</p>
      </div>
    );
  }

  if (isError) {
    return null;
  }

  return (
    <UserProvider user={user} setUser={setUser}>
      <div className="mx-auto flex w-full max-w-6xl grow flex-col items-stretch justify-start px-4 sm:px-6">
        {children}
      </div>
    </UserProvider>
  );
}
