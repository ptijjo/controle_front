import { Label } from "@/components/ui/label";
import { InputsFormulaire } from "@/interface/inputFormulaire";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";


const Step3: React.FC = () => {
    const { control, register, formState: { errors } } = useFormContext<InputsFormulaire>();

    // On "observe" la valeur du champ client et le type de ligne ou la ligne
    const client = useWatch({ control, name: "client" });
    // const typeLigne = useWatch({ control, name: "typeLigne" });
    const ligne = useWatch({ control, name: "ligne" });
    return (

        <div className="flex flex-col items-center justify-center w-full gap-6">
            {(client === "casas" && ligne === "transavold") &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">Lignes URBAINES</h2>
                    <Label className="p-3.5">
                        <p>N° de ligne</p>
                        <p className="text-red-700">*</p>
                    </Label>
                    <div className="p-3.5">
                        <select
                            {...register("numeroLigne", { required: "Le numéro de la ligne est obligatoire" })}
                            className="border border-gray-300 rounded p-3 text-base w-full"
                        >
                            <option value="">Sélectionner</option>
                            <option value="L1">L1</option>
                            <option value="L2">L2</option>
                            <option value="L3">L3</option>
                            <option value="L4">L4</option>
                            <option value="L5">L5</option>
                            <option value="L6">L6</option>
                            <option value="L8">L8</option>
                            <option value="L9">L9</option>
                            <option value="L10">L10</option>
                            <option value="Express">Express</option>
                            <option value="TransZac">TransZac</option>
                            <option value="TAD">TAD</option>
                        </select>
                        {errors.numeroLigne && <p className="text-red-600">{errors.numeroLigne.message}</p>}
                    </div>
                </section>}

        </div>
    )
}

export default Step3;