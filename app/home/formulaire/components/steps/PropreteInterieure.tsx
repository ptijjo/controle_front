import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react'
import { useFormContext } from 'react-hook-form';

const PropreteInterieure = () => {
    const { register, formState: { errors } } = useFormContext<InputsFormulaire>();
    return (
        <div className="flex flex-col items-center justify-center w-full gap-6 px-3.5">
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">PROPRETE INTERIEURE</h2>
                <h3 className="flex p-3.5 gap-2.5">
                    <p>Propreté intérieure</p>
                    <p className="text-red-700">*</p>
                </h3>
                <div className='flex w-[95%] md:w-[97%] mx-2.5 mb-3.5'>
                    <div className='hidden md:block w-[26.5%]'></div>
                    <div className='flex w-full md:w-[70%] text-xs md:text-sm lg:text-lg items-center justify-around px-2 md:px-3.5'>
                        <span>Propre</span>
                        <span>Moyen</span>
                        <span>Sale</span>
                    </div>
                </div>

                {/* Tableau de bord*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0">Tableau de bord</label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Propre"
                                {...register("tableauBord", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Moyen"
                                {...register("tableauBord", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Sale"
                                {...register("tableauBord", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                        </label>
                    </div>
                    {errors.tableauBord && <p className="text-red-600">{errors.tableauBord.message}</p>}
                </div>

                {/* Sol*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0"> Sol</label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Propre"
                                {...register("sol", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Moyen"
                                {...register("sol", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Sale"
                                {...register("sol", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                        </label>
                    </div>
                    {errors.sol && <p className="text-red-600">{errors.sol.message}</p>}
                </div>

                {/* Vitre*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0"> Vitres </label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Propre"
                                {...register("vitres", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Moyen"
                                {...register("vitres", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Sale"
                                {...register("vitres", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                        </label>
                    </div>
                    {errors.vitres && <p className="text-red-600">{errors.vitres.message}</p>}
                </div>

                {/* sièges*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-10 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0"> Sièges </label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Propre"
                                {...register("sieges", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Moyen"
                                {...register("sieges", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Sale"
                                {...register("sieges", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                        </label>
                    </div>
                    {errors.sieges && <p className="text-red-600">{errors.sieges.message}</p>}
                </div>
            </section>


            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden p-3 md:p-3.5">
                <label className="flex flex-row gap-1.5 text-sm md:text-base mb-2">
                    <span>Observations de l'état général intérieur du véhicule</span>
                    <span className="text-red-600">*</span>
                </label>
                <textarea
                    {...register("observationConditionsVehicule", { required: "L'observation est obligatoire" })}
                    placeholder='Votre réponse'
                    rows={6}
                    className="border border-gray-300 rounded p-2 text-sm md:text-base w-full mb-4 md:mb-10 min-h-[120px] md:min-h-[150px] resize-y"
                />
                {errors.observationConditionsVehicule && <p className="text-red-600">{errors.observationConditionsVehicule.message}</p>}
            </section>
            

        </div>
    )
}

export default PropreteInterieure