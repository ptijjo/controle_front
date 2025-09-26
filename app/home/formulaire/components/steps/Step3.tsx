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

        <div>
            {(client === "casas" && ligne === "transavold") &&
                <section>
                    <h2></h2>
                    <Label>
                        <p>N° de ligne</p>
                        <p>*</p>
                    </Label>
                    <select
                    {...register("numeroLigne", { required: "Le numéro de la ligne est obligatoire" })}
                    className="border border-gray-300 rounded p-2 text-base"
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
                </section>}
        </div>
    )
}

export default Step3;