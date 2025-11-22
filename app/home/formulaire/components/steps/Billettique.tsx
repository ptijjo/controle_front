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
                <div className='flex w-full text-sm md:text-lg items-center mb-3.5'>
                    <span className='relative left-[26%] md:left-[32%] md:w-1/3'>Conforme</span>
                    <span className='relative left-[36%] md:left-[20%] w-2 md:w-1/3'>Non conforme</span>
                    <span className='relative left-[56%] md:left-[10%] w-2 md:w-1/3'>Non observable</span>
                </div>

                {/* Electronique*/}
                <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5'>
                    <label className="flex w-[30%] p-1.5">Electronique</label>
                    <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
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
                <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5'>
                    <label className="flex w-[30%] p-1.5"> Papier</label>
                    <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
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
                <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5'>
                    <label className="flex w-[30%] p-1.5"> Fond de caisse </label>
                    <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
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

        </div>
    )
}

export default Billettique