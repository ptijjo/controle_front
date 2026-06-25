"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { paths } from "@/lib/paths";
import { setAuthSession, type StoredUser } from "@/lib/auth-storage";
import { getApiErrorMessage } from "@/lib/api-error";
import { loginSchema, type LoginInput } from "@/lib/schemas/auth";

function apiBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_API_URL?.trim() || "http://localhost:8585"
  ).replace(/\/$/, "");
}

function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-neutral-700">
        {label}
      </label>
      {children}
      {error && (
        <span className="text-sm text-red-600" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}


const LoginPage = () => {
  const navigate = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    try {
      const res = await axios.post<{
        access_token: string;
        refresh_token: string;
        user: StoredUser;
      }>(`${apiBaseUrl()}${paths.authLogin}`, data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      setAuthSession(
        res.data.access_token,
        res.data.refresh_token,
        res.data.user,
      );
      toast.success("Connexion réussie !");
      setTimeout(() => {
        navigate.push("/home");
      }, 600);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Connexion impossible."));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-md flex-col items-center justify-center gap-y-3 rounded-2xl border border-neutral-200/80 bg-white/90 px-5 py-8 shadow-lg shadow-neutral-900/5 backdrop-blur-sm sm:px-8"
      noValidate
    >
      <FormField id="email" label="E-mail" error={errors.email?.message}>
        <Input
          type="email"
          id="email"
          autoComplete="email"
          placeholder="exemple@email.com"
          className="rounded-lg border-neutral-300 pl-4"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
      </FormField>

      <FormField
        id="password"
        label="Mot de passe"
        error={errors.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="Votre mot de passe"
          className="rounded-lg border-neutral-300"
          aria-invalid={!!errors.password}
          {...register("password")}
        />
      </FormField>

      <Button
        type="submit"
        className="mt-3 w-full max-w-xs rounded-2xl bg-red-600 text-white hover:bg-red-500 md:w-2/3"
      >
        Se connecter
      </Button>
      <ToastContainer autoClose={2500} position="bottom-center" />
    </form>
  );
};

export default LoginPage;
