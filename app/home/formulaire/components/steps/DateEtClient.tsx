import { InputsFormulaire } from "@/interface/inputFormulaire";
import React from "react";
import { useFormContext } from "react-hook-form";

const DateEtClient: React.FC = () => {
    const { register, formState: { errors } } = useFormContext<InputsFormulaire>();

    return (
        <div className="flex flex-col items-center justify-center w-full gap-6">
            <h2 className="text-2xl font-bold">Controle de Qualité</h2>
            {/* Date */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4  h-[100px] rounded-md p-3.5">
                <label className="flex flex-row gap-1.5">
                    <span>Date du contrôle ?</span>
                    <span className="text-red-600">*</span>
                </label>
                <input
                    type="date"
                    {...register("date", {
                        required: "La date est obligatoire",
                        valueAsDate: true
                    })}
                    className="border-b border-b-gray-300 rounded p-2 text-base w-[40%] md:w-1/5"
                />
                {errors.date && <p className="text-red-600">{errors.date.message}</p>}
            </section>

            {/* Heure arrivée contrôleur */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4  h-[100px] rounded-md p-3.5">
                <label className="flex flex-row gap-1.5">
                    <span>Heure réelle</span>
                    <span className="text-red-600">*</span>
                </label>
                <input
                    type="time"
                    {...register("heureReelle", { required: "L'heure d'arrivée du contrôleur est obligatoire" })}
                    className="border-b border-b-gray-300 rounded p-2 text-base w-1/4 md:w-[13%]"
                />
                {errors.heureReelle && <p className="text-red-600">{errors.heureReelle.message}</p>}
            </section>

            {/* Heure prévue arrivée véhicule */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4  h-[100px] rounded-md p-3.5">
                <label className="flex flex-row gap-1.5">
                    <span>Heure d'arrivée du véhicule</span>
                    <span className="text-red-600">*</span>
                </label>
                <input
                    type="time"
                    {...register("heurePrevue", { required: "L'heure d'arrivée du véhicule est obligatoire" })}
                    className="border-b border-b-gray-300 rounded p-2 text-base w-1/4 md:w-[13%]"
                />
                {errors.heurePrevue && <p className="text-red-600">{errors.heurePrevue.message}</p>}
            </section>

            {/* Lieu du contrôle */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4  h-[100px] rounded-md p-3.5">
                <label className="flex flex-row gap-1.5">
                    <span>Lieu du contrôle ?</span>
                    <span className="text-red-600">*</span>
                </label>
                <input
                    type="text"
                    {...register("lieuControle", { required: "Le lieu de contrôle est obligatoire" })}
                    className="border-b border-b-gray-300 rounded p-2 text-base w-3/4 md:w-1/3"
                />
                {errors.lieuControle && <p className="text-red-600">{errors.lieuControle.message}</p>}
            </section>

            {/* Client */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 h-[100px] rounded-md p-3.5">
                <label className="flex flex-row gap-1.5">
                    <span>Client ?</span>
                    <span className="text-red-600">*</span>
                </label>
                <select
                    {...register("client", { required: "Le client est obligatoire" })}
                    className="border border-gray-300 rounded p-2 text-base"
                >
                    <option value="">Sélectionner</option>
                    <option value="casas">CASAS</option>
                    <option value="rgeFluo57">RGE FLUO57</option>
                    <option value="casc">CASC</option>
                    <option value="forbus">FORBUS</option>
                    <option value="apeiMoselle">APEI Moselle</option>
                    <option value="hombourgHaut">HOMBOURG HAUT</option>
                    <option value="autres">AUTRES</option>
                </select>
                {errors.client && <p className="text-red-600">{errors.client.message}</p>}
            </section>
        </div>
    );
};

export default DateEtClient;
