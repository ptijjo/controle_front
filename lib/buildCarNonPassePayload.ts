import { InputsFormulaire } from "@/interface/inputFormulaire";

const CAR_NON_PASSE_MOTIF = "Car non passé — contrôle véhicule non réalisé.";

/** Champs de contrôle remplis par défaut (hors contexte date/client/ligne du formulaire). */
function defaultRest(): Omit<
  InputsFormulaire,
  | "date"
  | "heurePrevue"
  | "heureReelle"
  | "lieuControle"
  | "client"
  | "carNonPasse"
> {
  return {
    nom: "N/A",
    prenom: "N/A",
    typeArret: "Non observable",
    zebra: "Non conforme",
    cadreAffichage: "Non conforme",
    ficheHoraire: "Non conforme",
    etatGeneral: "Non conforme",
    observationArret: CAR_NON_PASSE_MOTIF,
    parc: 0,
    carosserie: "Moyen",
    observationCar: CAR_NON_PASSE_MOTIF,
    affichageDestination: "Non conforme",
    affichageNumeroLigne: "Non conforme",
    pictoEnfant: "Non conforme",
    tarifAffiche: "Non conforme",
    depliantHoraire: "Non conforme",
    reglement: "Non conforme",
    billetiqueElectronique: "Non observable",
    billetiqueManuelle: "Non observable",
    fondDeCaisse: "Non observable",
    observationBilletique: CAR_NON_PASSE_MOTIF,
    tableauBord: "Moyen",
    sol: "Moyen",
    vitres: "Moyen",
    sieges: "Moyen",
    observationConditionsVehicule: CAR_NON_PASSE_MOTIF,
    nbreVoyageur: 0,
    nbreVoyageurIrregulier: 0,
    meteo: "beau",
    chauffeurSignature: "",
    controllerSignature: "",
  };
}

/**
 * Complète les champs obligatoires quand le car n'est pas passé.
 * Conserve date, client, type de ligne (étape 2), numéros de ligne éventuels, etc.
 */
export function buildCarNonPassePayload(
  formValues: Partial<InputsFormulaire> &
    Pick<
      InputsFormulaire,
      "date" | "heurePrevue" | "heureReelle" | "lieuControle" | "client"
    >
): InputsFormulaire {
  return {
    ...defaultRest(),
    ...formValues,
    carNonPasse: true,
    chauffeurSignature: "",
    controllerSignature: "",
  };
}
