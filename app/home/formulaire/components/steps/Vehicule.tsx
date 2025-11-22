import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react'
import { useFormContext } from 'react-hook-form';

const Vehicule = () => {
    const { register, formState: { errors } } = useFormContext<InputsFormulaire>();
    return (
        <div className="flex flex-col items-center justify-center w-full gap-6">

            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">Véhicule</h2>
                <div className='flex flex-col items-start justify-center p-3.5 w-full gap-6'>
                    <label className="flex flex-row gap-1.5">
                        <p>N° de parc</p>
                        <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="number"
                        {...register("parc", {
                            required: "Le numéro de parc est obligatoire",
                            valueAsNumber: true
                        })}
                        className="border-b border-b-gray-300 rounded p-2 text-base w-3/4 md:w-[95%] mb-10"
                    />
                </div>
                {errors.parc && <p className="text-red-600">{errors.parc.message}</p>}
            </section>

            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-md p-3.5 gap-6">
                <label className="flex flex-row gap-1.5">
                    <span>Propreté extérieure</span>
                    <span className="text-red-600">*</span>
                </label>
                <div className="flex flex-col gap-4 mt-2">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="Propre"
                            {...register("carosserie", { required: "La propreté extérieure est obligatoire" })}
                            className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                        />
                        <span>Propre</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="Moyen"
                            {...register("carosserie", { required: "La propreté extérieureest obligatoire" })}
                            className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                        />
                        <span>Moyen</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="Sale"
                            {...register("carosserie", { required: "La propreté extérieure est obligatoire" })}
                            className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                        />
                        <span>Sale</span>
                    </label>
                </div>
                {errors.carosserie && <p className="text-red-600">{errors.carosserie.message}</p>}
            </section>
        </div>
    )
}

export default Vehicule