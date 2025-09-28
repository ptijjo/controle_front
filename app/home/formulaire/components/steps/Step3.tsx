import { Label } from "@/components/ui/label";
import { InputsFormulaire } from "@/interface/inputFormulaire";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";


const Step3: React.FC = () => {
    const { control, register, formState: { errors } } = useFormContext<InputsFormulaire>();

    // On "observe" la valeur du champ client et le type de ligne ou la ligne
    const client = useWatch({ control, name: "client" });
    // const typeLigne = useWatch({ control, name: "typeLigne" });
    const ligne = useWatch({ control, name: "typeLigne" });
    return (

        <div className="flex flex-col items-center justify-center w-full gap-6">
            {/**CASAS TRANSAVOLD */}
            {(client === "casas" && ligne === "transavold") &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">Lignes URBAINES TRANSAVOLD</h2>
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
            
            {/**CASAS TRANSCHOOL */}
            {(client === "casas" && ligne === "transchool") &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">LIGNES TRANSCHOOL</h2>
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
                            <option value="T1">T1</option>
                            <option value="T2">T2</option>
                            <option value="T3">T3</option>
                            <option value="T4">T4</option>
                            <option value="T5">T5</option>
                            <option value="T6">T6</option>
                            <option value="T8">T8</option>
                            <option value="T9">T9</option>
                            <option value="T10">T10</option>
                            <option value="T11">T11</option>
                            <option value="T12">T12</option>
                            <option value="T13">T13</option>
                            <option value="T14">T14</option>
                            <option value="T15">T15</option>
                            <option value="T16">T16</option>
                            <option value="T17">T17</option>
                            <option value="T18">T18</option>
                            <option value="T19">T19</option>
                            <option value="T20">T20</option>
                            <option value="T21">T21</option>
                            <option value="T22">T22</option>
                            <option value="T23">T23</option>
                            <option value="T24">T24</option>
                            <option value="T25">T25</option>
                            <option value="T26">T26</option>
                            
                        </select>
                        {errors.numeroLigne && <p className="text-red-600">{errors.numeroLigne.message}</p>}
                    </div>
                </section>}

        </div>
    )
}

export default Step3;