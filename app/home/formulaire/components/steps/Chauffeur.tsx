import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const Chauffeur: React.FC = () => {
    const { register, formState: { errors } } = useFormContext<InputsFormulaire>();

    return (
        <div className="flex flex-col items-center justify-center w-full gap-4 md:gap-6 px-4">
            <h2 className="text-xl md:text-2xl font-bold text-center">Informations Chauffeur</h2>

            {/* Nom */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 min-h-[90px] md:min-h-[100px] rounded-md p-3 md:p-3.5 gap-2">
                <label className="flex flex-row gap-1.5 text-sm md:text-base">
                    <span>Nom</span>
                    <span className="text-red-600">*</span>
                </label>
                <input
                    type="text"
                    {...register("nom", { required: "Le nom est obligatoire" })}
                    className="border-b border-b-gray-300 rounded p-2 text-sm md:text-base w-full md:w-3/4 lg:w-1/2"
                    placeholder="Nom"
                />
                {errors.nom && <p className="text-red-600 text-xs md:text-sm">{errors.nom.message}</p>}
            </section>

            {/* Prénom */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 min-h-[90px] md:min-h-[100px] rounded-md p-3 md:p-3.5 gap-2">
                <label className="flex flex-row gap-1.5 text-sm md:text-base">
                    <span>Prénom</span>
                    <span className="text-red-600">*</span>
                </label>
                <input
                    type="text"
                    {...register("prenom", { required: "Le prénom est obligatoire" })}
                    className="border-b border-b-gray-300 rounded p-2 text-sm md:text-base w-full md:w-3/4 lg:w-1/2"
                    placeholder="Prénom"
                />
                {errors.prenom && <p className="text-red-600 text-xs md:text-sm">{errors.prenom.message}</p>}
            </section>

            {/* Email (optionnel) */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 min-h-[90px] md:min-h-[100px] rounded-md p-3 md:p-3.5 gap-2">
                <label className="flex flex-row gap-1.5 text-sm md:text-base">
                    <span>Email</span>
                </label>
                <input
                    type="email"
                    {...register("email")}
                    className="border-b border-b-gray-300 rounded p-2 text-sm md:text-base w-full md:w-3/4 lg:w-1/2"
                    placeholder="Email (optionnel)"
                />
                {errors.email && <p className="text-red-600 text-xs md:text-sm">{errors.email.message}</p>}
            </section>
        </div>
    );
};

export default Chauffeur;