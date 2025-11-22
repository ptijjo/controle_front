import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react'
import { useFormContext } from 'react-hook-form';

const ConformiteArret = () => {
    const { register } = useFormContext<InputsFormulaire>();
    return (
        <div className="flex flex-col items-center justify-center w-full gap-6 px-3.5">
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">CONFORMITE ARRÊT</h2>
                <h3 className="flex p-3.5 gap-2.5">
                    <p>Arrêt</p>
                    <p className="text-red-700">*</p>
                </h3>
                <div className='flex w-full'>
                    <span className='relative left-[40%] md:left-[38%]'>Conforme</span>
                    <span className='relative left-[50%] md:left-[60%]'>Non conforme</span>
                </div>

                {/* Présence de zébra*/}
                <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5'>
                    <label className="flex w-[30%] p-1.5"> Présence Zébra au sol </label>
                    <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Conforme"
                                {...register("zebra", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non Conforme"
                                {...register("zebra", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                    </div>
                </div>

                {/* Etat général*/}
                <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5'>
                    <label className="flex w-[30%] p-1.5"> Etat général </label>
                    <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Conforme"
                                {...register("etatGeneral", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non Conforme"
                                {...register("etatGeneral", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                    </div>
                </div>

                {/* Présence cadre affichage*/}
                <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5'>
                    <label className="flex w-[30%] p-1.5"> Présence cadre affichage </label>
                    <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Conforme"
                                {...register("cadreAffichage", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non Conforme"
                                {...register("cadreAffichage", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                    </div>
                </div>

                {/* Affichage horaires de ligne*/}
                <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5'>
                    <label className="flex w-[30%] p-1.5"> Affichage horaires de ligne </label>
                    <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Conforme"
                                {...register("ficheHoraire", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non Conforme"
                                {...register("ficheHoraire", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                    </div>
                </div>


            </section>

        </div>
    )
}

export default ConformiteArret