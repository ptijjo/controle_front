import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react'
import { useFormContext } from 'react-hook-form';

const ObservationArret = () => {
    const { register } = useFormContext<InputsFormulaire>();
    return (
        <div className="flex flex-col items-center justify-center w-full gap-6">

            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">Observations sur Arrêt</h2>
                <div className='flex flex-col items-start justify-center p-3.5 w-full gap-6'>
                    <label>Observations</label>
                    <input
                        type="text"
                        {...register("observationArret")}
                        placeholder='Votre réponse'
                        className="border-b border-b-gray-300 rounded p-2 text-base w-3/4 md:w-[95%] mb-10"
                    />
                </div>
            </section>
        </div>
    )
}

export default ObservationArret