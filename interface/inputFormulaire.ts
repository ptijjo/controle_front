import NumeroLigne from '../app/home/formulaire/components/steps/NumeroLigne';

export interface InputsFormulaire {
  // Date de soumission du formulaire
  heurePrevue: string;
  heureReelle: string;
  date: Date;
  lieuControle: string;

  // Chauffeur info
  nom: string;
  prenom: string;
  email?: string;

  // Info arrêt de bus
  ficheHoraire: "Conforme" | "Non conforme";
  cadreAffichage: "Conforme" | "Non conforme";
  etatGeneral: "Conforme" | "Non conforme";
  typeArret: "Abris bus" | "Poteau arrêt" | "Non observable";
  zebra: "Conforme" | "Non conforme";
  observationArret?: string;

//   // Info ligne de bus
//   numeroLigne: string;

  // Info client
  client: "casas" | "rgeFluo57" | "casc" | "forbus" | "apeiMoselle" | "hombourgHaut" | "autres";
    ligneCasas?: "transavold" | "transchool";
    ligneForbus?: "Doublage" | "CSCAF";
  ligneRge?: "Lr" | "Sa" | "Sc";
    ligneCasc?: "Lr" | "Sa" | "Sc";
    ligneHH?: "Sc";
    numLigneHH?: "HH1" | "HH2" | "HH3";
    numLigneForbusDoublage?: "L2" | "L2 bis" | "L5" | "L9";
    numLigneForbusCSCAF?: "CSCAF1" | "CSCAF2" | "CSCAF3" | "CSCAF4"|"CSCAF5"|"CSCAF6"|"CSCAF7";
  numLigneCascLr?: "11" | "125";
  numLigneCascSA?: "SA125";
  numLigneCascSc?: "SR02" | "SR03" | "ESR01" | "EDP00" | "EGB00" | "EHR00" | "EKV00" | "ERI00" | "EVD00" | "EZT00" | "PT01" | "PT02" | "PT04" | "PT06" | "PT07";
  numLigneRgeLr?: "04" | "07" | "24" | "39" | "129" | "138" | "MS" | "21" | "23";
  numLigneRgeSa?: "SA4" | "SA7" | "SA24" | "SA129" | "SA138";
  numLigneRgeSc?: "AV34" | "DZ04" | "DZ11" | "ECR00" | "EDD00" | "ELB01" | "ERA00" | "ETE00" | "EVA01" | "EZB00" | "FQ01" | "FQ03" | "FQ04" | "FQ06" | "MF07" | "MH01" | "MH03" | "EHV00" | "ELL00";
  numLigneTransavold?: "L1" | "L2" | "L3" | "L4" | "L5" | "L6" | "L7" | "L8" | "L9" | "L10" | "Express" | "TransZac" | "TAD";
  numLigneTranschool?: "T1" | "T2" | "T3" | "T4" | "T5" | "T6" | "T7" | "T8" | "T9" | "T10" | "T11" | "T12" | "T13" | "T14" | "T15" | "T16" | "T17" | "T18" | "T19" | "T20" | "T21" | "T22" | "T23" | "T24" | "T25" | "T26";

  // Météo
  meteo: "beau" | "pluvieux";

  // Info car et trajet
  parc: number;
  respectItineraire?: boolean;
  affichageDestination: "Conforme" | "Non conforme";
  affichageNumeroLigne: "Conforme" | "Non conforme";
  pictoEnfant: "Conforme" | "Non conforme";
  tarifAffiche: "Conforme" | "Non conforme";
  depliantHoraire: "Conforme" | "Non conforme";
  reglement: "Conforme" | "Non conforme";
  tenue?: boolean;
  carosserie: "Propre" | "Moyen" | "Sale";
  observationCar: string;

  // Billettique
  billetiqueElectronique: "Conforme" | "Non conforme" | "Non observable";
  billetiqueManuelle: "Conforme" | "Non conforme" | "Non observable";
  fondDeCaisse: "Conforme" | "Non conforme" | "Non observable";
  observationBilletique: string;

  // Conditions de transport
  tableauBord: "Propre" | "Moyen" | "Sale";
  sol: "Propre" | "Moyen" | "Sale";
  vitres: "Propre" | "Moyen" | "Sale";
  sieges: "Propre" | "Moyen" | "Sale";
  observationConditionsVehicule?: string;

  // Info voyageur
  nbreVoyageur: number;
  nbreVoyageurIrregulier: number;

  // Signatures
  chauffeurSignature: string;
  controllerSignature: string;
}

