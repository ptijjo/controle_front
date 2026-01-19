import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react'
import { useFormContext } from 'react-hook-form';

const Billettique = () => {
    const { register, formState: { errors } } = useFormContext<InputsFormulaire>();
    return (
        <div className="flex flex-col items-center justify-center w-full gap-6 px-3.5">
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">BILLETTIQUE</h2>
                <h3 className="flex p-3.5 gap-2.5">
                    <p>Billetique</p>
                    <p className="text-red-700">*</p>
                </h3>
                <div className='flex w-[95%] md:w-[97%] mx-2.5 mb-3.5'>
                    <div className='hidden md:block w-[30%]'></div>
                    <div className='flex w-full md:w-[70%] text-xs md:text-sm lg:text-base items-center justify-around px-2 md:px-3.5'>
                        <span>Conforme</span>
                        <span>Non conforme</span>
                        <span>Non observable</span>
                    </div>
                </div>

                {/* Electronique*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0">Electronique</label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Conforme"
                                {...register("billetiqueElectronique", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non conforme"
                                {...register("billetiqueElectronique", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non observable"
                                {...register("billetiqueElectronique", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                        </label>
                    </div>
                    {errors.billetiqueElectronique && <p className="text-red-600">{errors.billetiqueElectronique.message}</p>}
                </div>

                {/* Papier*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0"> Papier</label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Conforme"
                                {...register("billetiqueManuelle", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non conforme"
                                {...register("billetiqueManuelle", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non observable"
                                {...register("billetiqueManuelle", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                        </label>
                    </div>
                    {errors.billetiqueManuelle && <p className="text-red-600">{errors.billetiqueManuelle.message}</p>}
                </div>

                {/* Fond de caisse*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0"> Fond de caisse </label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Conforme"
                                {...register("fondDeCaisse", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non conforme"
                                {...register("fondDeCaisse", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non observable"
                                {...register("fondDeCaisse", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                        </label>
                    </div>
                    {errors.fondDeCaisse && <p className="text-red-600">{errors.fondDeCaisse.message}</p>}
                </div>

            </section>

            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-lg md:text-xl h-[50px] text-center p-3 md:p-3.5">OBSERVATIONS BILLETTIQUE</h2>
                <div className='flex flex-col items-start justify-center p-3 md:p-3.5 w-full gap-4 md:gap-6'>
                    <label className="text-sm md:text-base">Observation de la billetique</label>
                    <textarea
                        {...register("observationBilletique", { required: "L'observation est obligatoire" })}
                        placeholder='Votre réponse'
                        rows={6}
                        className="border border-gray-300 rounded p-2 text-sm md:text-base w-full mb-4 md:mb-10 min-h-[120px] md:min-h-[150px] resize-y"
                    />
                    {errors.observationBilletique && <p className="text-red-600">{errors.observationBilletique.message}</p>}
                </div>
            </section>

        </div>
    )
}

export default Billettique