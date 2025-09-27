import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react'
import { useFormContext } from 'react-hook-form';

const Client = () => {
    const { register } = useFormContext<InputsFormulaire>();
    return (
        <div className="flex flex-col items-center justify-center w-full gap-6 px-3.5">
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">CLIENTS</h2>
                <h3 className="flex p-3.5 gap-2.5">
                    <p>Respect affichage</p>
                    <p className="text-red-700">*</p>
                </h3>
                <label className='p-3.5'>Nombre de clients</label>
                <input
                    type="number"
                    {...register("nbreVoyageur")}
                    placeholder='Votre réponse'
                    className="border-b border-b-gray-300 rounded p-2 text-base w-3/4 md:w-[95%] mb-10"
                />
            </section>

            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden p-3.5">
                <label>Nombre de fraudeurs</label>
                <input
                    type="number"
                    {...register("nbreVoyageurIrregulier")}
                    placeholder='Votre réponse'
                    className="border-b border-b-gray-300 rounded p-2 text-base w-3/4 md:w-[95%] mb-10"
                />
            </section>
        </div>)
}

export default Client