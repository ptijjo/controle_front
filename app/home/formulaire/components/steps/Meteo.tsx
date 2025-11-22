import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const Meteo: React.FC = () => {
    const { register, formState: { errors } } = useFormContext<InputsFormulaire>();

    return (
        <div className="flex flex-col items-center justify-center w-full gap-6">
            <h2 className="text-2xl font-bold">Météo</h2>

            {/* Météo */}
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 h-[100px] rounded-md p-3.5">
                <label className="flex flex-row gap-1.5">
                    <span>Météo</span>
                    <span className="text-red-600">*</span>
                </label>
                <div className="flex flex-col gap-2 mt-2">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="beau"
                            {...register("meteo", { required: "La météo est obligatoire" })}
                            className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                        />
                        <span>Beau (ensoleillé ou nuageux mais sec)</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="pluvieux"
                            {...register("meteo", { required: "La météo est obligatoire" })}
                            className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                        />
                        <span>Pluvieux, Neigeux (temps humide)</span>
                    </label>
                </div>
                {errors.meteo && <p className="text-red-600">{errors.meteo.message}</p>}
            </section>
        </div>
    );
};

export default Meteo;