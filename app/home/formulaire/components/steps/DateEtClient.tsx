import { InputsFormulaire } from "@/interface/inputFormulaire";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const DateEtClient: React.FC = () => {
    const { register, formState: { errors }, setValue } = useFormContext<InputsFormulaire>();

    // Définir la date du jour automatiquement
    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0]; // Format YYYY-MM-DD
        setValue("date", formattedDate as any);
    }, [setValue]);

    return (
        <div className="flex flex-col items-center justify-center w-full gap-4 md:gap-6 px-4">
            <h2 className="text-xl md:text-2xl font-bold text-center">Controle de Qualité</h2>
            {/* Date */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 min-h-[90px] md:min-h-[100px] rounded-md p-3 md:p-3.5 gap-2">
                <label className="flex flex-row gap-1.5 text-sm md:text-base">
                    <span>Date du contrôle ?</span>
                    <span className="text-red-600">*</span>
                </label>
                <input
                    type="date"
                    {...register("date", {
                        required: "La date est obligatoire",
                        valueAsDate: true
                    })}
                    defaultValue={new Date().toISOString().split('T')[0]}
                    readOnly
                    className="border-b border-b-gray-300 rounded p-2 text-sm md:text-base w-full sm:w-[60%] md:w-[40%] lg:w-1/5 bg-gray-100 cursor-not-allowed"
                />
                {errors.date && <p className="text-red-600 text-xs md:text-sm">{errors.date.message}</p>}
            </section>

            {/* Heure arrivée contrôleur */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 min-h-[90px] md:min-h-[100px] rounded-md p-3 md:p-3.5 gap-2">
                <label className="flex flex-row gap-1.5 text-sm md:text-base">
                    <span>Heure d'arrivée du véhicule</span>
                    <span className="text-red-600">*</span>
                </label>
                <input
                    type="time"
                    {...register("heureReelle", { required: "L'heure d'arrivée du contrôleur est obligatoire" })}
                    className="border-b border-b-gray-300 rounded p-2 text-sm md:text-base w-full sm:w-[50%] md:w-1/4 lg:w-[13%]"
                />
                {errors.heureReelle && <p className="text-red-600 text-xs md:text-sm">{errors.heureReelle.message}</p>}
            </section>

            {/* Heure prévue arrivée véhicule */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 min-h-[90px] md:min-h-[100px] rounded-md p-3 md:p-3.5 gap-2">
                <label className="flex flex-row gap-1.5 text-sm md:text-base">
                    <span>Heure de départ du véhicule</span>
                    <span className="text-red-600">*</span>
                </label>
                <input
                    type="time"
                    {...register("heurePrevue", { required: "L'heure d'arrivée du véhicule est obligatoire" })}
                    className="border-b border-b-gray-300 rounded p-2 text-sm md:text-base w-full sm:w-[50%] md:w-1/4 lg:w-[13%]"
                />
                {errors.heurePrevue && <p className="text-red-600 text-xs md:text-sm">{errors.heurePrevue.message}</p>}
            </section>

            {/* Lieu du contrôle */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 min-h-[90px] md:min-h-[100px] rounded-md p-3 md:p-3.5 gap-2">
                <label className="flex flex-row gap-1.5 text-sm md:text-base">
                    <span>Lieu du contrôle ?</span>
                    <span className="text-red-600">*</span>
                </label>
                <input
                    type="text"
                    {...register("lieuControle", { required: "Le lieu de contrôle est obligatoire" })}
                    className="border-b border-b-gray-300 rounded p-2 text-sm md:text-base w-full md:w-3/4 lg:w-1/3"
                />
                {errors.lieuControle && <p className="text-red-600 text-xs md:text-sm">{errors.lieuControle.message}</p>}
            </section>

            {/* Client */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 min-h-[90px] md:min-h-[100px] rounded-md p-3 md:p-3.5 gap-2">
                <label className="flex flex-row gap-1.5 text-sm md:text-base">
                    <span>Client ?</span>
                    <span className="text-red-600">*</span>
                </label>
                <select
                    {...register("client", { required: "Le client est obligatoire" })}
                    className="border border-gray-300 rounded p-2 text-sm md:text-base w-full md:w-auto"
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
                {errors.client && <p className="text-red-600 text-xs md:text-sm">{errors.client.message}</p>}
            </section>
        </div>
    );
};

export default DateEtClient;
