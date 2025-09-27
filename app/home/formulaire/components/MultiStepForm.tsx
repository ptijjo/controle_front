"use client"
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import { InputsFormulaire } from "@/interface/inputFormulaire";
import Step3 from "./steps/Step3";
import StepSignature from "./steps/StepSignature";
import axios from "axios";
import { Url } from "@/lib/Url";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Step4 from "./steps/Step4";
import ConformiteArret from "./steps/ConformiteArret";

import Vehicule from "./steps/Vehicule";
import ObservationArret from "./steps/ObservationArret";
import ObservationProprete from "./steps/ObservationProprete";

type Step = {
    component: React.FC;
    fields: (keyof InputsFormulaire)[];
};

const steps: Step[] = [
    { component: Step1, fields: ["email", "date", "heurePrevue", "heureReelle", "meteo", "lieuControle", "client"] },
    { component: Step2, fields: ["ligne", "typeLigne"] },
    { component: Step3, fields: ["numeroLigne"] },
    { component: Step4, fields: ["typeArret"] },
    { component: ConformiteArret, fields: ["affichageHoraire", "presenceCadreAffichage", "zebra", "pleineVoie"] },
    { component: ObservationArret, fields: [] },
    { component: Vehicule, fields: [] },
    { component: ObservationProprete, fields: ["observationProprete"] },
    { component: StepSignature, fields: ["chauffeurSignature", "controllerSignature"] },
];

export default function MultiStepForm() {
    const navigate = useRouter();
    const methods = useForm<InputsFormulaire>({ mode: "onChange" });
    const [step, setStep] = useState(0);

    const onSubmit = async (data: InputsFormulaire) => {
        console.log("✅ Formulaire soumis :", data);
        const response = await axios.post(Url.form, data, {
            withCredentials: true
        })

        console.log(response.data)
        if (response.data.message === "Formulaire crée avec succès") {
            toast.success("Formulaire envoyé et validé !");
            setTimeout(() => {
                navigate.push("/home")
            }, 2000);
        }
    };

    const nextStep = async () => {
        const isValid = await methods.trigger(steps[step].fields);
        if (isValid) setStep((s) => s + 1);
    };

    const prevStep = () => setStep((s) => s - 1);

    const CurrentStep = steps[step].component;

    const progress = ((step + 1) / steps.length) * 100;

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex-flex-colitem-center justify-center w-full bg-[#F7EEED]">

                {/* 🔹 Indicateur d'étape */}
                <div style={{ marginBottom: "10px" }}>
                    <p>Étape {step + 1} sur {steps.length}</p>
                    <div
                        style={{
                            height: "8px",
                            width: "100%",
                            background: "#eee",
                            borderRadius: "4px",
                            overflow: "hidden",
                            marginTop: "4px",
                        }}
                    >
                        <div
                            style={{
                                height: "100%",
                                width: `${progress}%`,
                                background: "#4caf50",
                                transition: "width 0.3s ease-in-out",
                            }}
                        />
                    </div>
                </div>

                {/* 🔹 Étape en cours */}
                <CurrentStep />

                {/* 🔹 Boutons navigation */}
                <div className="flex flex-row items-center justify-between mt-[20px] p-3.5">
                    {step > 0 && (
                        <Button type="button" onClick={prevStep} className="bg-gray-950 text-white">
                            Précédent
                        </Button>
                    )}
                    {step < steps.length - 1 ? (
                        <Button type="button" onClick={nextStep} className="bg-red-700 text-white">
                            Suivant
                        </Button>
                    ) : (
                        <Button type="submit" className="bg-red-700 text-white">Valider</Button>
                    )}
                </div>
            </form>
            <ToastContainer autoClose={2000} />
        </FormProvider>
    );
}