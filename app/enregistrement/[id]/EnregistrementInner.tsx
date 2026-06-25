"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { paths } from "@/lib/paths";
import { api } from "@/lib/api";
import { getApiErrorMessage } from "@/lib/api-error";
import {
  registerInviteFormSchema,
  type RegisterInviteFormInput,
} from "@/lib/schemas/register-invite";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function isInvitationVerifyResponseOk(payload: unknown): boolean {
  if (!payload || typeof payload !== "object") return false;
  const data = (payload as { data?: unknown }).data;
  return typeof data === "object" && data !== null;
}

type InvitationPhase =
  | { kind: "loading" }
  | { kind: "invalid"; message: string }
  | { kind: "valid" };

export default function EnregistrementInner() {
  const params = useParams();
  const navigate = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const token = useMemo((): string | null => {
    const raw = params?.id;
    if (typeof raw === "string" && raw.length > 0) {
      try {
        return decodeURIComponent(raw);
      } catch {
        return raw;
      }
    }
    if (Array.isArray(raw) && typeof raw[0] === "string" && raw[0].length > 0) {
      try {
        return decodeURIComponent(raw[0]);
      } catch {
        return raw[0];
      }
    }
    return null;
  }, [params]);

  const [phase, setPhase] = useState<InvitationPhase>(() =>
    token == null
      ? {
          kind: "invalid",
          message: "Lien d’invitation invalide (jeton manquant).",
        }
      : { kind: "loading" },
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInviteFormInput>({
    resolver: zodResolver(registerInviteFormSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (token == null) return;

    let cancelled = false;
    (async () => {
      try {
        const res = await api.get(
          `${paths.authInvitationVerify}/${encodeURIComponent(token)}`,
        );
        if (cancelled) return;
        if (isInvitationVerifyResponseOk(res.data)) {
          setPhase({ kind: "valid" });
        } else {
          setPhase({
            kind: "invalid",
            message:
              "Réponse serveur inattendue après vérification du lien.",
          });
        }
      } catch (error) {
        if (cancelled) return;
        setPhase({
          kind: "invalid",
          message: getApiErrorMessage(
            error,
            "Impossible de vérifier ce lien d’invitation.",
          ),
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [token]);

  const onSubmit: SubmitHandler<RegisterInviteFormInput> = async (data) => {
    if (!token) {
      toast.error("Token d'invitation manquant");
      return;
    }

    setServerError(null);
    setIsSubmitting(true);
    try {
      const response = await api.post(paths.authRegisterInvite, {
        token,
        nom: data.nom,
        prenom: data.prenom,
        password: data.password,
      });

      if (
        response.status === 201 &&
        response.data &&
        typeof response.data === "object" &&
        "id" in response.data
      ) {
        toast.success("Compte créé avec succès !");
        setTimeout(() => {
          navigate.push("/");
        }, 2000);
      } else {
        const fallback = "Erreur lors de la création du compte.";
        setServerError(fallback);
        toast.error(fallback);
      }
    } catch (error) {
      const message = getApiErrorMessage(
        error,
        "Une erreur est survenue lors de la création du compte",
      );
      setServerError(message);
      toast.error(message, { autoClose: 6000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (phase.kind === "loading") {
    return (
      <main className="flex min-h-screen w-full grow flex-col items-center justify-center px-4 py-8">
        <div className="space-y-2 text-center">
          <p className="text-lg">Vérification du lien d’invitation…</p>
          <p className="text-sm text-gray-500">
            Merci de patienter pendant que nous validons votre invitation.
          </p>
        </div>
      </main>
    );
  }

  if (phase.kind === "invalid") {
    return (
      <main className="flex min-h-screen w-full grow flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md space-y-4 rounded-lg border border-red-200 bg-red-50 p-6 text-center">
          <h1 className="text-xl font-semibold text-red-900">
            Lien d’invitation invalide ou expiré
          </h1>
          <p role="alert" className="text-sm text-red-800">
            {phase.message}
          </p>
          <Button
            type="button"
            variant="outline"
            className="border-red-300 text-red-800 hover:bg-red-100"
            onClick={() => navigate.push("/")}
          >
            Retour à l’accueil
          </Button>
        </div>
        <ToastContainer autoClose={2000} />
      </main>
    );
  }

  if (!token) {
    return null;
  }

  return (
    <main className="flex min-h-screen w-full grow flex-col items-center justify-center px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        Créer votre compte
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-md flex-col gap-6 rounded-lg bg-white p-6 shadow-lg"
      >
        <p className="text-sm text-gray-600">
          Complétez les champs ci-dessous pour créer votre compte.
        </p>
        <div className="flex flex-col gap-2">
          <label htmlFor="nom" className="text-sm font-medium text-gray-700">
            Nom *
          </label>
          <Input
            type="text"
            id="nom"
            placeholder="Votre nom"
            autoComplete="off"
            className="rounded pl-4"
            aria-invalid={!!errors.nom}
            {...register("nom")}
          />
          {errors.nom && (
            <span className="text-sm text-red-500">{errors.nom.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="prenom" className="text-sm font-medium text-gray-700">
            Prénom *
          </label>
          <Input
            type="text"
            id="prenom"
            placeholder="Votre prénom"
            autoComplete="off"
            className="rounded pl-4"
            aria-invalid={!!errors.prenom}
            {...register("prenom")}
          />
          {errors.prenom && (
            <span className="text-sm text-red-500">{errors.prenom.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Mot de passe *
          </label>
          <Input
            type="password"
            id="password"
            placeholder="Votre mot de passe"
            autoComplete="new-password"
            className="rounded pl-4"
            aria-invalid={!!errors.password}
            {...register("password")}
          />
          {errors.password && (
            <span className="text-sm text-red-500">{errors.password.message}</span>
          )}
          <p className="mt-1 text-xs text-gray-500">
            Le mot de passe doit contenir au moins une majuscule, une minuscule, un
            chiffre, un symbole et au moins 8 caractères.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-gray-700"
          >
            Confirmer le mot de passe *
          </label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirmez votre mot de passe"
            autoComplete="new-password"
            className="rounded pl-4"
            aria-invalid={!!errors.confirmPassword}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        {serverError && (
          <p
            role="alert"
            className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800"
          >
            {serverError}
          </p>
        )}

        <Button
          type="submit"
          className="w-full bg-red-600 text-white hover:bg-red-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Création en cours..." : "Créer mon compte"}
        </Button>
      </form>

      <ToastContainer autoClose={2000} />
    </main>
  );
}
