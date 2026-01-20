"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios, { AxiosError } from 'axios'
import { Url } from '@/lib/Url'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useUser } from '../context/UserContext'

interface InviteUserForm {
  email: string
}

const AjouterUtilisateur = () => {
  const { user } = useUser()
  const navigate = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<InviteUserForm>()

  // Vérifier que l'utilisateur a les droits
  if (!user || (user.role !== "controleur" && user.role !== "chef_service")) {
    navigate.push("/home")
    return null
  }

  const onSubmit = async (data: InviteUserForm) => {
    setIsSubmitting(true)
    try {
      const response = await axios.post(
        Url.inviteUser,
        { email: data.email },
        { withCredentials: true }
      )

      if (response.data.message === "invitation envoyée !") {
        toast.success("Invitation envoyée avec succès !")
        reset()
        setTimeout(() => {
          navigate.push("/home")
        }, 2000)
      } else {
        toast.error("Erreur lors de l'envoi de l'invitation.")
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "Une erreur est survenue lors de l'envoi de l'invitation")
      } else {
        toast.error("Une erreur est survenue")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex flex-col flex-grow items-center justify-center w-full min-h-screen px-4 py-8">
      <h1 className='text-3xl md:text-4xl font-bold text-center mb-8'>Ajouter un utilisateur</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email de l'utilisateur à inviter
          </label>
          <Input
            type="email"
            id="email"
            placeholder="exemple@email.com"
            className="rounded pl-4"
            {...register("email", {
              required: "L'email est obligatoire",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email invalide"
              }
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-row gap-4 justify-end">
          <Button
            type="button"
            onClick={() => navigate.push("/home")}
            className="bg-gray-500 hover:bg-gray-400 text-white"
            disabled={isSubmitting}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            className="bg-red-600 hover:bg-red-500 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi..." : "Envoyer l'invitation"}
          </Button>
        </div>
      </form>

      <ToastContainer autoClose={2000} />
    </main>
  )
}

export default AjouterUtilisateur
