"use client"
import React, { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios, { AxiosError } from 'axios'
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

const Enregistrement = () => {
  const params = useParams()
  const navigate = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [token, setToken] = useState<string | null>(null)

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
    // Récupérer le token depuis l'URL
    if (params?.id && typeof params.id === 'string') {
      setToken(params.id)
    } else {
      toast.error("Token d'invitation invalide")
      setTimeout(() => {
        navigate.push("/")
      }, 2000)
    }
  }, [params, navigate])

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    if (!token) {
      toast.error("Token d'invitation manquant")
      return
    }

    setIsSubmitting(true)
    try {
      const response = await axios.post(
        Url.signUp + "/" + token,
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
        toast.error("Erreur lors de la création du compte.")
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "Une erreur est survenue lors de la création du compte")
      } else {
        toast.error("Une erreur est survenue")
      }
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

  return (
    <main className="flex flex-col flex-grow items-center justify-center w-full min-h-screen px-4 py-8">
      <h1 className='text-3xl md:text-4xl font-bold text-center mb-8'>Créer votre compte</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
      >
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
