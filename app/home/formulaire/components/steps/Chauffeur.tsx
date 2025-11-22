import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const Chauffeur: React.FC = () => {
    const { register, formState: { errors } } = useFormContext<InputsFormulaire>();

    return (
        <div className="flex flex-col items-center justify-center w-full gap-6">
            <h2 className="text-2xl font-bold">Informations Chauffeur</h2>

            {/* Nom */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 h-[100px] rounded-md p-3.5">
                <label className="flex flex-row gap-1.5">
                    <span>Nom</span>
                    <span className="text-red-600">*</span>
                </label>
                <input
                    type="text"
                    {...register("nom", { required: "Le nom est obligatoire" })}
                    className="border-b border-b-gray-300 rounded p-2 text-base w-3/4 md:w-1/2"
                    placeholder="Nom"
                />
                {errors.nom && <p className="text-red-600">{errors.nom.message}</p>}
            </section>

            {/* Prénom */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 h-[100px] rounded-md p-3.5">
                <label className="flex flex-row gap-1.5">
                    <span>Prénom</span>
                    <span className="text-red-600">*</span>
                </label>
                <input
                    type="text"
                    {...register("prenom", { required: "Le prénom est obligatoire" })}
                    className="border-b border-b-gray-300 rounded p-2 text-base w-3/4 md:w-1/2"
                    placeholder="Prénom"
                />
                {errors.prenom && <p className="text-red-600">{errors.prenom.message}</p>}
            </section>

            {/* Email (optionnel) */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 h-[100px] rounded-md p-3.5">
                <label className="flex flex-row gap-1.5">
                    <span>Email</span>
                </label>
                <input
                    type="email"
                    {...register("email")}
                    className="border-b border-b-gray-300 rounded p-2 text-base w-3/4 md:w-1/2"
                    placeholder="Email (optionnel)"
                />
                {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </section>
        </div>
    );
};

export default Chauffeur;