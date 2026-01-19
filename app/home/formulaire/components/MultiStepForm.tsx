"use client"
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { InputsFormulaire } from "@/interface/inputFormulaire";
import StepSignature from "./steps/StepSignature";
import axios from "axios";
import { Url } from "@/lib/Url";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import ConformiteArret from "./steps/ConformiteArret";

import Vehicule from "./steps/Vehicule";
import ObservationArret from "./steps/ObservationArret";
import ObservationProprete from "./steps/ObservationProprete";
import AffichageVehicule from "./steps/AffichageVehicule";
import Billettique from "./steps/Billettique";
import PropreteInterieure from "./steps/PropreteInterieure";
import Client from "./steps/Client";
import TypeLigne from "./steps/TypeLigne";
import DateEtClient from "./steps/DateEtClient";
import NumeroLigne from "./steps/NumeroLigne";
import TypeArret from "./steps/TypeArret";
import Chauffeur from "./steps/Chauffeur";
import Meteo from "./steps/Meteo";

type Step = {
    component: React.FC;
    fields: (keyof InputsFormulaire)[];
};

const steps: Step[] = [
    { component: DateEtClient, fields: ["date", "heurePrevue", "heureReelle", "lieuControle", "client"] },
    { component: TypeLigne, fields: ["ligneCasas", "ligneForbus", "ligneRge", "ligneCasc", "ligneHH"] },
    { component: NumeroLigne, fields: ["numLigneForbusDoublage", "numLigneForbusCSCAF", "numLigneRgeLr", "numLigneRgeSa", "numLigneRgeSc", "numLigneCascLr", "numLigneCascSA", "numLigneCascSc", "numLigneTransavold", "numLigneTranschool"] },
    { component: TypeArret, fields: ["typeArret"] },
    { component: ConformiteArret, fields: ["zebra", "cadreAffichage", "ficheHoraire", "etatGeneral"] },
    { component: ObservationArret, fields: ["observationArret"] },
    { component: Vehicule, fields: ["parc", "carosserie"] },
    { component: ObservationProprete, fields: ["observationCar"] },
    { component: AffichageVehicule, fields: ["affichageDestination", "depliantHoraire", "reglement", "tarifAffiche", "pictoEnfant", "affichageNumeroLigne"] },
    { component: Billettique, fields: ["billetiqueElectronique", "billetiqueManuelle", "fondDeCaisse", "observationBilletique"] },
    { component: PropreteInterieure, fields: ["sieges", "tableauBord", "sol", "vitres", "observationConditionsVehicule"] },
    { component: Client, fields: ["nbreVoyageur", "nbreVoyageurIrregulier"] },
    { component: Meteo, fields: ["meteo"] },
    { component: Chauffeur, fields: ["nom", "prenom"] },
    { component: StepSignature, fields: ["chauffeurSignature", "controllerSignature"] },
];
export default function MultiStepForm() {
    const navigate = useRouter();
    const methods = useForm<InputsFormulaire>({
        mode: "onChange"
    });


    const [step, setStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data: InputsFormulaire) => {
        setIsSubmitting(true);
        try {
            const response = await axios.post(Url.form, data, {
                withCredentials: true
            })

            if (response.data.message === "Formulaire crée avec succès") {
                toast.success("Formulaire envoyé et validé !");
                setTimeout(() => {
                    navigate.push("/home")
                }, 2000);
            } else {
                toast.error("Erreur lors de l'envoi du formulaire.");
            }
        } catch (error) {
            toast.error("Erreur lors de l'envoi du formulaire.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const nextStep = async () => {
        const isValid = await methods.trigger(steps[step].fields);
        if (!isValid) return; // arrête si l'étape actuelle n'est pas valide

        if (step === 0) {
            const client = methods.getValues("client");

            if (client === "apeiMoselle" || client === "autres") {
                setStep(2);
                return

            }
        }

        // Exemple de saut conditionnel depuis l'étape 3
        if (step === 3) {
            const poteau = methods.getValues("typeArret");
            if (poteau === "Non observable") {
                setStep(5); // sauter directement à l'étape 6 (index 5)
                return;
            }
        }

        setStep((s) => s + 1); // sinon continue normalement
    };


    const prevStep = () => {
        // Si tu veux gérer un retour conditionnel
        if (step === 5) {
            const poteau = methods.getValues("typeArret");
            if (poteau === "Non observable") {
                setStep(3); // revenir directement à l'étape 3
                return;
            }
        }

        if (step === 2) {
            const client = methods.getValues("client");
            if (client === "apeiMoselle" || client === "hombourgHaut" || client === "autres") {
                setStep(0);
                return

            }
        }

        setStep((s) => s - 1);
    };

    const handleCancel = () => {
        if (window.confirm("Êtes-vous sûr de vouloir annuler le formulaire ? Toutes les données saisies seront perdues.")) {
            navigate.push("/home");
        }
    };



    const CurrentStep = steps[step].component;

    const progress = ((step + 1) / steps.length) * 100;


    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col items-center justify-center w-full bg-[#F7EEED] min-h-screen py-4 md:py-6">

                {/* 🔹 Bouton Annuler */}
                <div className="w-full px-4 md:px-6 mb-4 flex justify-end">
                    <Button
                        type="button"
                        onClick={handleCancel}
                        className="bg-gray-500 hover:bg-gray-600 text-white text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
                        disabled={isSubmitting}
                    >
                        Annuler
                    </Button>
                </div>

                {/* 🔹 Indicateur d'étape */}
                <div className="w-full px-4 md:px-6 mb-4 md:mb-6">
                    <p className="text-sm md:text-base text-center mb-2">Étape {step + 1} sur {steps.length}</p>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-green-500 transition-all duration-300 ease-in-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/*  Étape en cours */}
                <div className="w-full flex-1">
                    <CurrentStep />
                </div>

                {/*  Boutons navigation */}
                <div className="flex flex-row items-center justify-between w-full px-4 md:px-6 mt-4 md:mt-6 gap-4">
                    {step > 0 && (
                        <Button
                            type="button"
                            onClick={prevStep}
                            className="bg-gray-950 text-white text-sm md:text-base px-4 md:px-6 py-2 md:py-3 flex-1 md:flex-initial"
                            disabled={isSubmitting}
                        >
                            Précédent
                        </Button>
                    )}
                    <div className={step > 0 ? "flex-1 md:flex-initial" : "flex-1"}></div>
                    {step < steps.length - 1 ? (
                        <Button
                            type="button"
                            onClick={nextStep}
                            className="bg-red-700 text-white text-sm md:text-base px-4 md:px-6 py-2 md:py-3 flex-1 md:flex-initial"
                            disabled={isSubmitting}
                        >
                            Suivant
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            className="bg-red-700 text-white text-sm md:text-base px-4 md:px-6 py-2 md:py-3 flex-1 md:flex-initial"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Envoi en cours..." : "Valider"}
                        </Button>
                    )}
                </div>
            </form>
            <ToastContainer autoClose={2000} />
        </FormProvider>
    );
}