"use client"
import React, { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { Url } from '@/lib/Url'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type SignUpForm = {
  nom: string
  prenom: string
  password: string
  confirmPassword: string
}

/** Extrait le message renvoyé par HttpException / pipes de validation (string | string[]). */
function getHttpApiErrorMessage(
  error: unknown,
  fallback = "Une erreur est survenue"
): string {
  if (!axios.isAxiosError(error)) {
    return fallback
  }
  const data = error.response?.data
  if (data && typeof data === "object" && "message" in data) {
    const msg = (data as { message: unknown }).message
    if (typeof msg === "string" && msg.trim()) return msg
    if (Array.isArray(msg)) {
      const parts = msg.filter((m): m is string => typeof m === "string")
      if (parts.length) return parts.join(" ")
    }
  }
  if (error.code === "ERR_NETWORK") {
    return "Impossible de joindre le serveur. Vérifiez votre connexion."
  }
  return fallback
}

/** Vérifie la forme de la réponse sans lire ni conserver d’e-mail. */
function isInvitationVerifyResponseOk(payload: unknown): boolean {
  if (!payload || typeof payload !== "object") return false
  const data = (payload as { data?: unknown }).data
  return typeof data === "object" && data !== null
}

const Enregistrement = () => {
  const params = useParams()
  const navigate = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const [serverError, setServerError] = useState<string | null>(null)
  const [inviteStatus, setInviteStatus] = useState<
    "idle" | "checking" | "valid" | "invalid"
  >("idle")
  const [inviteError, setInviteError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<SignUpForm>({
    mode: "onChange"
  })

  const password = watch('password')

  useEffect(() => {
    const raw = params?.id
    const idFromRoute = Array.isArray(raw) ? raw[0] : raw
    if (idFromRoute && typeof idFromRoute === "string") {
      setToken(idFromRoute)
    } else {
      toast.error("Token d'invitation invalide")
      setTimeout(() => {
        navigate.push("/")
      }, 2000)
    }
  }, [params, navigate])

  useEffect(() => {
    if (!token) return

    let cancelled = false
    setInviteStatus("checking")
    setInviteError(null)

    const verify = async () => {
      try {
        const res = await axios.get(
          `${Url.signUpInvitationVerify}/${encodeURIComponent(token)}`,
          { withCredentials: true }
        )
        if (cancelled) return
        if (isInvitationVerifyResponseOk(res.data)) {
          setInviteStatus("valid")
        } else {
          setInviteStatus("invalid")
          setInviteError(
            "Réponse serveur inattendue après vérification du lien."
          )
        }
      } catch (error) {
        if (cancelled) return
        setInviteStatus("invalid")
        setInviteError(
          getHttpApiErrorMessage(
            error,
            "Impossible de vérifier ce lien d’invitation."
          )
        )
      }
    }

    void verify()
    return () => {
      cancelled = true
    }
  }, [token])

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    if (!token) {
      toast.error("Token d'invitation manquant")
      return
    }

    setServerError(null)
    setIsSubmitting(true)
    try {
      const response = await axios.post(
        `${Url.signUp}/${encodeURIComponent(token)}`,
        {
          nom: data.nom,
          prenom: data.prenom,
          password: data.password
        },
        { withCredentials: true }
      )

      if (response.data.message === "signup") {
        toast.success("Compte créé avec succès !")
        setTimeout(() => {
          navigate.push("/")
        }, 2000)
      } else {
        const fallback = "Erreur lors de la création du compte."
        setServerError(fallback)
        toast.error(fallback)
      }
    } catch (error) {
      const message = getHttpApiErrorMessage(
        error,
        "Une erreur est survenue lors de la création du compte"
      )
      setServerError(message)
      toast.error(message, { autoClose: 6000 })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!token) {
    return (
      <main className="flex flex-col flex-grow items-center justify-center w-full min-h-screen px-4 py-8">
        <div className="text-center">
          <p className="text-lg">Chargement...</p>
        </div>
      </main>
    )
  }

  if (inviteStatus === "checking" || inviteStatus === "idle") {
    return (
      <main className="flex flex-col flex-grow items-center justify-center w-full min-h-screen px-4 py-8">
        <div className="text-center space-y-2">
          <p className="text-lg">Vérification du lien d’invitation…</p>
          <p className="text-sm text-gray-500">
            Merci de patienter pendant que nous validons votre invitation.
          </p>
        </div>
      </main>
    )
  }

  if (inviteStatus === "invalid") {
    return (
      <main className="flex flex-col flex-grow items-center justify-center w-full min-h-screen px-4 py-8">
        <div className="w-full max-w-md rounded-lg border border-red-200 bg-red-50 p-6 text-center space-y-4">
          <h1 className="text-xl font-semibold text-red-900">
            Lien d’invitation invalide ou expiré
          </h1>
          <p role="alert" className="text-sm text-red-800">
            {inviteError ??
              "Ce lien ne peut pas être utilisé. Demandez une nouvelle invitation."}
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
    )
  }

  return (
    <main className="flex flex-col flex-grow items-center justify-center w-full min-h-screen px-4 py-8">
      <h1 className='text-3xl md:text-4xl font-bold text-center mb-8'>Créer votre compte</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
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
            {...register("nom", {
              required: "Le nom est obligatoire",
              minLength: {
                value: 2,
                message: "Le nom doit contenir au moins 2 caractères"
              },
              maxLength: {
                value: 16,
                message: "Le nom ne peut pas dépasser 16 caractères"
              }
            })}
          />
          {errors.nom && (
            <span className="text-red-500 text-sm">{errors.nom.message}</span>
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
            {...register("prenom", {
              required: "Le prénom est obligatoire",
              minLength: {
                value: 2,
                message: "Le prénom doit contenir au moins 2 caractères"
              },
              maxLength: {
                value: 16,
                message: "Le prénom ne peut pas dépasser 16 caractères"
              }
            })}
          />
          {errors.prenom && (
            <span className="text-red-500 text-sm">{errors.prenom.message}</span>
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
            {...register("password", {
              required: "Le mot de passe est obligatoire",
              minLength: {
                value: 8,
                message: "Le mot de passe doit contenir au moins 8 caractères"
              }
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password.message}</span>
          )}
          <p className="text-xs text-gray-500 mt-1">
            Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre, un symbole et au moins 8 caractères.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
            Confirmer le mot de passe *
          </label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirmez votre mot de passe"
            autoComplete="new-password"
            className="rounded pl-4"
            {...register("confirmPassword", {
              required: "La confirmation du mot de passe est obligatoire",
              validate: (value) =>
                value === password || "Les mots de passe ne correspondent pas"
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
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
          className="bg-red-600 hover:bg-red-500 text-white w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Création en cours..." : "Créer mon compte"}
        </Button>
      </form>

      <ToastContainer autoClose={2000} />
    </main>
  )
}

export default Enregistrement
