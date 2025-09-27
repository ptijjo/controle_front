import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react'
import { useFormContext } from 'react-hook-form';

const ObservationProprete = () => {
    const { register, formState: { errors } } = useFormContext<InputsFormulaire>();
    return (
        <div className="flex flex-col items-center justify-center w-full gap-6">

            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">Observations Propreté</h2>
                <div className='flex flex-col items-start justify-center p-3.5 w-full gap-6'>
                    <label className="flex flex-row gap-1.5">
                        <span>Observations</span>
                        <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        {...register("observationProprete", { required: "Le'observation est obligatoire" })}
                        placeholder='Votre réponse'
                        className="border-b border-b-gray-300 rounded p-2 text-base w-3/4 md:w-[95%] mb-10"
                    />
                </div>
                {errors.observationProprete && <p className="text-red-600">{errors.observationProprete.message}</p>}
            </section>
        </div>
    )
}

export default ObservationProprete