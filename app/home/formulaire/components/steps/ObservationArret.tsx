import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react'
import { useFormContext } from 'react-hook-form';

const ObservationArret = () => {
    const { register, formState: { errors } } = useFormContext<InputsFormulaire>();
    return (
        <div className="flex flex-col items-center justify-center w-full gap-6">

            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-lg md:text-xl h-[50px] text-center p-3 md:p-3.5">Observations sur Arrêt</h2>
                <div className='flex flex-col items-start justify-center p-3 md:p-3.5 w-full gap-4 md:gap-6'>
                    <label className="text-sm md:text-base">Observations</label>
                    <textarea
                        {...register("observationArret", { required: "Le'observation est obligatoire" })}
                        placeholder='Votre réponse'
                        rows={6}
                        className="border border-gray-300 rounded p-2 text-sm md:text-base w-full mb-4 md:mb-10 min-h-[120px] md:min-h-[150px] resize-y"
                    />
                    {errors.observationArret && <p className="text-red-600 text-xs md:text-sm px-3 md:px-3.5 pb-3 md:pb-3.5">{errors.observationArret.message}</p>}
                </div>
            </section>
        </div>
    )
}

export default ObservationArret