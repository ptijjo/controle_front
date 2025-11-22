import { Label } from "@/components/ui/label";
import { InputsFormulaire } from "@/interface/inputFormulaire";
import React, { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";


const NumeroLigne: React.FC = () => {
    const { control, register, formState: { errors }, setValue } = useFormContext<InputsFormulaire>();

    // On "observe" la valeur du champ client et le type de ligne ou la ligne
    const client = useWatch({ control, name: "client" });
    // const typeLigne = useWatch({ control, name: "typeLigne" });
    const ligneCasas = useWatch({ control, name: "ligneCasas" });
    const ligneRge = useWatch({ control, name: "ligneRge" });
    const ligneCasc = useWatch({ control, name: "ligneCasc" });
    const ligneForbus = useWatch({ control, name: "ligneForbus" });

    // Réinitialiser les numéros de ligne quand le client ou le type de ligne change
    useEffect(() => {
        setValue("numLigneTransavold", undefined);
        setValue("numLigneTranschool", undefined);
        setValue("numLigneRgeLr", undefined);
        setValue("numLigneRgeSa", undefined);
        setValue("numLigneRgeSc", undefined);
        setValue("numLigneCascLr", undefined);
        setValue("numLigneCascSA", undefined);
        setValue("numLigneCascSc", undefined);
        setValue("numLigneForbusDoublage", undefined);
        setValue("numLigneForbusCSCAF", undefined);
        setValue("numLigneHH", undefined);
    }, [client, ligneCasas, ligneRge, ligneCasc, ligneForbus, setValue]);

    return (

        <div className="flex flex-col items-center justify-center w-full gap-6">
            {/**CASAS TRANSAVOLD */}
            {(client === "casas" && ligneCasas === "transavold") &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">Lignes URBAINES TRANSAVOLD</h2>
                    <Label className="p-3.5">
                        <p>N° de ligne</p>
                        <p className="text-red-700">*</p>
                    </Label>
                    <div className="p-3.5">
                        <select
                            {...register("numLigneTransavold", { required: "Le numéro de la ligne est obligatoire" })}
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
                        {errors.numLigneTransavold && <p className="text-red-600">{errors.numLigneTransavold.message}</p>}
                    </div>
                </section>}

            {/**CASAS TRANSCHOOL */}
            {(client === "casas" && ligneCasas === "transchool") &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">LIGNES TRANSCHOOL</h2>
                    <Label className="p-3.5">
                        <p>N° de ligne</p>
                        <p className="text-red-700">*</p>
                    </Label>
                    <div className="p-3.5">
                        <select
                            {...register("numLigneTranschool", { required: "Le numéro de la ligne est obligatoire" })}
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
                        {errors.numLigneTranschool && <p className="text-red-600">{errors.numLigneTranschool.message}</p>}
                    </div>
                </section>}

            {/* RGE LR */}
            {(client === "rgeFluo57" && ligneRge === "Lr") &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">LIGNES REGULIERES</h2>
                    <Label className="p-3.5">
                        <p>N° de ligne</p>
                        <p className="text-red-700">*</p>
                    </Label>
                    <div className="p-3.5">
                        <select
                            {...register("numLigneRgeLr", { required: "Le numéro de la ligne est obligatoire" })}
                            className="border border-gray-300 rounded p-3 text-base w-full"
                        >
                            <option value="">Sélectionner</option>
                            <option value="04">04</option>
                            <option value="07">07</option>
                            <option value="21">21</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="39">39</option>
                            <option value="129">129</option>
                            <option value="138">138</option>
                            <option value="MS">MS</option>

                        </select>
                        {errors.numLigneRgeLr && <p className="text-red-600">{errors.numLigneRgeLr.message}</p>}
                    </div>
                </section>}

            {/* RGE SA */}
            {(client === "rgeFluo57" && ligneRge === "Sa") &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">LIGNES SCOLAIRES</h2>
                    <Label className="p-3.5">
                        <p>N° de ligne</p>
                        <p className="text-red-700">*</p>
                    </Label>
                    <div className="p-3.5">
                        <select
                            {...register("numLigneRgeSa", { required: "Le numéro de la ligne est obligatoire" })}
                            className="border border-gray-300 rounded p-3 text-base w-full"
                        >
                            <option value="">Sélectionner</option>
                            <option value="SA4">SA4</option>
                            <option value="SA7">SA7</option>
                            <option value="SA24">SA24</option>
                            <option value="SA129">SA129</option>
                            <option value="SA138">SA138</option>
                        </select>
                        {errors.numLigneRgeSa && <p className="text-red-600">{errors.numLigneRgeSa.message}</p>}
                    </div>
                </section>}

            {/* RGE SC */}
            {(client === "rgeFluo57" && ligneRge === "Sc") &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">LIGNES SPÉCIALISÉES</h2>
                    <Label className="p-3.5">
                        <p>N° de ligne</p>
                        <p className="text-red-700">*</p>
                    </Label>
                    <div className="p-3.5">
                        <select
                            {...register("numLigneRgeSc", { required: "Le numéro de la ligne est obligatoire" })}
                            className="border border-gray-300 rounded p-3 text-base w-full"
                        >
                            <option value="">Sélectionner</option>
                            <option value="AV34">AV34</option>
                            <option value="DZ04">DZ04</option>
                            <option value="DZ11">DZ11</option>
                            <option value="ECR00">ECR00</option>
                            <option value="EDD00">EDD00</option>
                            <option value="ELB01">ELB01</option>
                            <option value="ERA00">ERA00</option>
                            <option value="ETE00">ETE00</option>
                            <option value="EVA01">EVA01</option>
                            <option value="EZB00">EZB00</option>
                            <option value="FQ01">FQ01</option>
                            <option value="FQ03">FQ03</option>
                            <option value="FQ04">FQ04</option>
                            <option value="FQ06">FQ06</option>
                            <option value="MF07">MF07</option>
                            <option value="MH01">MH01</option>
                            <option value="MH03">MH03</option>
                            <option value="EHV00">EHV00</option>
                            <option value="ELL00">ELL00</option>
                        </select>
                        {errors.numLigneRgeSc && <p className="text-red-600">{errors.numLigneRgeSc.message}</p>}
                    </div>
                </section>}

            {/* CASC LR */}
            {(client === "casc" && ligneCasc === "Lr") &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">LIGNES REGULIERES</h2>
                    <Label className="p-3.5">
                        <p>N° de ligne</p>
                        <p className="text-red-700">*</p>
                    </Label>
                    <div className="p-3.5">
                        <select
                            {...register("numLigneCascLr", { required: "Le numéro de la ligne est obligatoire" })}
                            className="border border-gray-300 rounded p-3 text-base w-full"
                        >
                            <option value="">Sélectionner</option>
                            <option value="11">11</option>
                            <option value="125">125</option>
                        </select>
                        {errors.numLigneCascLr && <p className="text-red-600">{errors.numLigneCascLr.message}</p>}
                    </div>
                </section>}

            {/* CASC SA */}
            {(client === "casc" && ligneCasc === "Sa") &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">LIGNES SCOLAIRES</h2>
                    <Label className="p-3.5">
                        <p>N° de ligne</p>
                        <p className="text-red-700">*</p>
                    </Label>
                    <div className="p-3.5">
                        <select
                            {...register("numLigneCascSA", { required: "Le numéro de la ligne est obligatoire" })}
                            className="border border-gray-300 rounded p-3 text-base w-full"
                        >
                            <option value="">Sélectionner</option>
                            <option value="SA125">SA125</option>
                        </select>
                        {errors.numLigneCascSA && <p className="text-red-600">{errors.numLigneCascSA.message}</p>}
                    </div>
                </section>}

            {/* CASC SC */}
            {(client === "casc" && ligneCasc === "Sc") &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">LIGNES SPÉCIALISÉES</h2>
                    <Label className="p-3.5">
                        <p>N° de ligne</p>
                        <p className="text-red-700">*</p>
                    </Label>
                    <div className="p-3.5">
                        <select
                            {...register("numLigneCascSc", { required: "Le numéro de la ligne est obligatoire" })}
                            className="border border-gray-300 rounded p-3 text-base w-full"
                        >
                            <option value="">Sélectionner</option>
                            <option value="SR02">SR02</option>
                            <option value="SR03">SR03</option>
                            <option value="ESR01">ESR01</option>
                            <option value="EDP00">EDP00</option>
                            <option value="EGB00">EGB00</option>
                            <option value="EHR00">EHR00</option>
                            <option value="EKV00">EKV00</option>
                            <option value="ERI00">ERI00</option>
                            <option value="EVD00">EVD00</option>
                            <option value="EZT00">EZT00</option>
                            <option value="PT01">PT01</option>
                            <option value="PT02">PT02</option>
                            <option value="PT04">PT04</option>
                            <option value="PT06">PT06</option>
                            <option value="PT07">PT07</option>
                        </select>
                        {errors.numLigneCascSc && <p className="text-red-600">{errors.numLigneCascSc.message}</p>}
                    </div>
                </section>}

            {/* FORBUS DOUBLAGE */}
            {(client === "forbus" && ligneForbus === "Doublage") &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">LIGNES URBAINES / DOUBLAGE</h2>
                    <Label className="p-3.5">
                        <p>N° de ligne</p>
                        <p className="text-red-700">*</p>
                    </Label>
                    <div className="p-3.5">
                        <select
                            {...register("numLigneForbusDoublage", { required: "Le numéro de la ligne est obligatoire" })}
                            className="border border-gray-300 rounded p-3 text-base w-full"
                        >
                            <option value="">Sélectionner</option>
                            <option value="L2">L2</option>
                            <option value="L2 bis">L2 bis</option>
                            <option value="L5">L5</option>
                            <option value="L9">L9</option>
                        </select>
                        {errors.numLigneForbusDoublage && <p className="text-red-600">{errors.numLigneForbusDoublage.message}</p>}
                    </div>
                </section>}

            {/* FORBUS CSCAF */}
            {(client === "forbus" && ligneForbus === "CSCAF") &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">LIGNES CSCAF</h2>
                    <Label className="p-3.5">
                        <p>N° de ligne</p>
                        <p className="text-red-700">*</p>
                    </Label>
                    <div className="p-3.5">
                        <select
                            {...register("numLigneForbusCSCAF", { required: "Le numéro de la ligne est obligatoire" })}
                            className="border border-gray-300 rounded p-3 text-base w-full"
                        >
                            <option value="">Sélectionner</option>
                            <option value="CSCAF1">CSCAF1</option>
                            <option value="CSCAF2">CSCAF2</option>
                            <option value="CSCAF3">CSCAF3</option>
                            <option value="CSCAF4">CSCAF4</option>
                            <option value="CSCAF5">CSCAF5</option>
                            <option value="CSCAF6">CSCAF6</option>
                            <option value="CSCAF7">CSCAF7</option>
                        </select>
                        {errors.numLigneForbusCSCAF && <p className="text-red-600">{errors.numLigneForbusCSCAF.message}</p>}
                    </div>
                </section>}

            {/* HOMBOURG HAUT */}
            {client === "hombourgHaut" &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">HOMBOURG HAUT</h2>
                    <Label className="p-3.5">
                        <p>N° de ligne</p>
                        <p className="text-red-700">*</p>
                    </Label>
                    <div className="p-3.5">
                        <select
                            {...register("numLigneHH", { required: "Le numéro de la ligne est obligatoire" })}
                            className="border border-gray-300 rounded p-3 text-base w-full"
                        >
                            <option value="">Sélectionner</option>
                            <option value="HH1">HH1</option>
                            <option value="HH2">HH2</option>
                            <option value="HH3">HH3</option>
                        </select>
                        {errors.numLigneHH && <p className="text-red-600">{errors.numLigneHH.message}</p>}
                    </div>
                </section>}
        </div>
    )
}

export default NumeroLigne;