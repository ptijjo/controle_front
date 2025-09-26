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

type Step = {
    component: React.FC;
    fields: (keyof InputsFormulaire)[];
};

const steps: Step[] = [
    { component: Step1, fields: ["email", "date", "heurePrevue", "heureReelle", "meteo", "lieuControle", "client"] },
    { component: Step2, fields: ["ligne", "typeLigne"] },
    { component: Step3, fields: ["numeroLigne"] },
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
            <form onSubmit={methods.handleSubmit(onSubmit)}>

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
                <div style={{ marginTop: "20px" }}>
                    {step > 0 && (
                        <button type="button" onClick={prevStep}>
                            ⬅️ Précédent
                        </button>
                    )}
                    {step < steps.length - 1 ? (
                        <button type="button" onClick={nextStep}>
                            ➡️ Suivant
                        </button>
                    ) : (
                        <button type="submit">✅ Valider</button>
                    )}
                </div>
            </form>
            <ToastContainer autoClose={2000} />
        </FormProvider>
    );
}