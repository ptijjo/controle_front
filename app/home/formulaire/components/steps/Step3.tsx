import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InputsFormulaire } from "@/interface/inputFormulaire";
import React from "react";
import { useFormContext, Controller, useWatch } from "react-hook-form";


const Step3: React.FC = () => {
    const { control } = useFormContext<InputsFormulaire>();

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
                    <Controller
                        name="numeroLigne"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Selectionner" />
                                </SelectTrigger>

                                <SelectContent className="bg-white">
                                    <SelectItem value="L1">L1</SelectItem>
                                    <SelectItem value="L2">L2</SelectItem>
                                    <SelectItem value="L3">L3</SelectItem>
                                    <SelectItem value="L4">L4</SelectItem>
                                    <SelectItem value="L5">L5</SelectItem>
                                    <SelectItem value="L6">L6</SelectItem>
                                    <SelectItem value="L8">L8</SelectItem>
                                    <SelectItem value="L9">L9</SelectItem>
                                    <SelectItem value="L10">L10</SelectItem>
                                    <SelectItem value="Express">Express</SelectItem>
                                    <SelectItem value="TransZac">TransZac</SelectItem>
                                    <SelectItem value="TAD">TAD</SelectItem>
                                </SelectContent>
                            </Select>

                        )}
                    />
                </section>}
        </div>
    )
}

export default Step3;