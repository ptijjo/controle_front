import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email obligatoire")
    .email("Email invalide"),
  password: z.string().min(1, "Mot de passe obligatoire"),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const inviteEmailSchema = z.object({
  email: z
    .string()
    .min(1, "L'email est obligatoire")
    .email("Email invalide"),
});

export type InviteEmailInput = z.infer<typeof inviteEmailSchema>;
