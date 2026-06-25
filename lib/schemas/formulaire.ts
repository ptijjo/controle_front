import { z } from "zod";

const heureHhMm = z
  .string()
  .regex(/^\d{2}:\d{2}$/, "L'heure doit être au format HH:mm");

/** Validation finale avant envoi API (complète la validation par étapes RHF). */
export const formulaireSubmitSchema = z
  .object({
    carNonPasse: z.boolean().optional(),
    date: z.coerce.date({ message: "Date invalide" }),
    heurePrevue: heureHhMm,
    heureReelle: z.string().optional(),
    lieuControle: z.string().min(1, "Le lieu de contrôle est obligatoire"),
    client: z.string().min(1, "Le client est obligatoire"),
    nom: z.string().min(1, "Le nom du chauffeur est obligatoire"),
    prenom: z.string().min(1, "Le prénom du chauffeur est obligatoire"),
    chauffeurSignature: z.string().optional(),
    controllerSignature: z.string().optional(),
  })
  .passthrough()
  .superRefine((data, ctx) => {
    const carNonPasse = data.carNonPasse === true;
    if (!carNonPasse) {
      if (!data.heureReelle?.trim()) {
        ctx.addIssue({
          code: "custom",
          message: "L'heure d'arrivée du véhicule est obligatoire",
          path: ["heureReelle"],
        });
      } else if (!heureHhMm.safeParse(data.heureReelle).success) {
        ctx.addIssue({
          code: "custom",
          message: "L'heure doit être au format HH:mm",
          path: ["heureReelle"],
        });
      }
      if (!data.chauffeurSignature?.trim()) {
        ctx.addIssue({
          code: "custom",
          message: "La signature du chauffeur est obligatoire",
          path: ["chauffeurSignature"],
        });
      }
      if (!data.controllerSignature?.trim()) {
        ctx.addIssue({
          code: "custom",
          message: "La signature du contrôleur est obligatoire",
          path: ["controllerSignature"],
        });
      }
    }
  });

export type FormulaireSubmitInput = z.infer<typeof formulaireSubmitSchema>;
