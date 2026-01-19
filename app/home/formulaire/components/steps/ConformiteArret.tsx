import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react'
import { useFormContext } from 'react-hook-form';

const ConformiteArret = () => {
    const { register, formState: { errors } } = useFormContext<InputsFormulaire>();
    return (
        <div className="flex flex-col items-center justify-center w-full gap-6 px-3.5">
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">CONFORMITE ARRÊT</h2>
                <h3 className="flex p-3.5 gap-2.5">
                    <p>Arrêt</p>
                    <p className="text-red-700">*</p>
                </h3>
                <div className='flex w-[95%] md:w-[97%] mx-2.5 mb-3.5'>
                    <div className='hidden md:block w-[30%]'></div>
                    <div className='flex w-full md:w-[70%] text-xs md:text-sm lg:text-base items-center justify-around px-2 md:px-3.5'>
                        <span>Conforme</span>
                        <span>Non conforme</span>
                    </div>
                </div>

                {/* Présence de zébra*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0"> Présence Zébra au sol </label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
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
                    {errors.zebra && <p className="text-red-600 text-xs md:text-sm px-3 md:px-3.5 pb-2">{errors.zebra.message}</p>}
                </div>

                {/* Etat général*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0"> Etat général </label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
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
                    {errors.etatGeneral && <p className="text-red-600 text-xs md:text-sm px-3 md:px-3.5 pb-2">{errors.etatGeneral.message}</p>}
                </div>

                {/* Présence cadre affichage*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0"> Présence cadre affichage </label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
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
                    {errors.cadreAffichage && <p className="text-red-600 text-xs md:text-sm px-3 md:px-3.5 pb-2">{errors.cadreAffichage.message}</p>}
                </div>

                {/* Affichage horaires de ligne*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0"> Affichage horaires de ligne </label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
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
                    {errors.ficheHoraire && <p className="text-red-600 text-xs md:text-sm px-3 md:px-3.5 pb-2">{errors.ficheHoraire.message}</p>}
                </div>


            </section>

        </div>
    )
}

export default ConformiteArret