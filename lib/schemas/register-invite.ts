import { z } from "zod";

const nameField = z
  .string()
  .min(1, "Ce champ est obligatoire")
  .min(2, "Doit contenir au moins 2 caractères")
  .max(16, "Ne peut pas dépasser 16 caractères");

const passwordField = z
  .string()
  .min(1, "Le mot de passe est obligatoire")
  .min(8, "Le mot de passe doit contenir au moins 8 caractères")
  .regex(/[a-z]/, "Au moins une minuscule requise")
  .regex(/[A-Z]/, "Au moins une majuscule requise")
  .regex(/[0-9]/, "Au moins un chiffre requis")
  .regex(/[^a-zA-Z0-9]/, "Au moins un symbole requis");

export const registerInviteFormSchema = z
  .object({
    nom: nameField,
    prenom: nameField,
    password: passwordField,
    confirmPassword: z.string().min(1, "La confirmation est obligatoire"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

export type RegisterInviteFormInput = z.infer<typeof registerInviteFormSchema>;
