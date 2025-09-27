import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react'
import { useFormContext } from 'react-hook-form';

const Step4 = () => {
    const {  register } = useFormContext<InputsFormulaire>();


    return (
        <div className="flex flex-col items-center justify-center w-full gap-6">
          
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">DETAIL DU CONTRÔLE</h2>
                    <label className="flex p-3.5 gap-2.5">
                        <p>Type Arrêt</p>
                        <p className="text-red-700">*</p>
                    </label>
                     <div className="flex flex-col gap-2 mt-2 p-3.5">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="abrisBus"
                            {...register("typeArret", { required: "Le type d'arrêt est obligatoire" })}
                            className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                        />
                        <span>Abris bus</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="poteauArret"
                            {...register("typeArret", { required: "Le type d'arrêt est obligatoire" })}
                            className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                        />
                        <span>Poteau arrêt</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="nonObservable"
                            {...register("typeArret", { required: "Le type d'arrêt est obligatoire" })}
                            className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                        />
                        <span>Non observable</span>
                    </label>
                </div>
                </section>
            
        </div>
    )
}

export default Step4