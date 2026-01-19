import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react'
import { useFormContext } from 'react-hook-form';

const ObservationProprete = () => {
    const { register, formState: { errors } } = useFormContext<InputsFormulaire>();
    return (
        <div className="flex flex-col items-center justify-center w-full gap-6">

            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-lg md:text-xl h-[50px] text-center p-3 md:p-3.5">Observations Propreté</h2>
                <div className='flex flex-col items-start justify-center p-3 md:p-3.5 w-full gap-4 md:gap-6'>
                    <label className="flex flex-row gap-1.5 text-sm md:text-base">
                        <span>Observations</span>
                        <span className="text-red-600">*</span>
                    </label>
                    <textarea
                        {...register("observationCar", { required: "L'observation est obligatoire" })}
                        placeholder='Votre réponse'
                        rows={6}
                        className="border border-gray-300 rounded p-2 text-sm md:text-base w-full mb-4 md:mb-10 min-h-[120px] md:min-h-[150px] resize-y"
                    />
                </div>
                {errors.observationCar && <p className="text-red-600 text-xs md:text-sm px-3 md:px-3.5 pb-3 md:pb-3.5">{errors.observationCar.message}</p>}
            </section>
        </div>
    )
}

export default ObservationProprete