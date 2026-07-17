"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { paths } from "@/lib/paths";
import { api } from "@/lib/api";
import { getApiErrorMessage } from "@/lib/api-error";
import { inviteEmailSchema, type InviteEmailInput } from "@/lib/schemas/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "../context/UserContext";

export default function AjouterUtilisateurInner() {
  const { user } = useUser();
  const navigate = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InviteEmailInput>({
    resolver: zodResolver(inviteEmailSchema),
  });

  if (!user || (user.role !== "controleur" && user.role !== "chef_service")) {
    navigate.push("/home");
    return null;
  }

  const onSubmit = async (data: InviteEmailInput) => {
    setIsSubmitting(true);
    try {
      await api.post(paths.authInvitation, { email: data.email });
      toast.success("Invitation envoyée avec succès !");
      reset();
      setTimeout(() => {
        navigate.push("/home");
      }, 1500);
    } catch (error) {
      toast.error(
        getApiErrorMessage(
          error,
          "Une erreur est survenue lors de l'envoi de l'invitation",
        ),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen w-full grow flex-col items-center justify-center px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        Ajouter un utilisateur
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-md flex-col gap-6 rounded-xl border border-neutral-200 bg-white p-6 shadow-lg"
        noValidate
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-neutral-700">
            E-mail de la personne à inviter
          </label>
          <Input
            type="email"
            id="email"
            placeholder="exemple@email.com"
            className="rounded-lg pl-4"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <span className="text-sm text-red-500" role="alert">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-row justify-end gap-4">
          <Button
            type="button"
            onClick={() => navigate.push("/home")}
            className="bg-neutral-500 text-white hover:bg-neutral-400"
            disabled={isSubmitting}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            className="bg-red-600 text-white hover:bg-red-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi…" : "Envoyer l'invitation"}
          </Button>
        </div>
      </form>
    </main>
  );
}
