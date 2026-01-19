import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react'
import { useFormContext } from 'react-hook-form';

const AffichageVehicule = () => {
    const { register, formState: { errors } } = useFormContext<InputsFormulaire>();
    return (
        <div className="flex flex-col items-center justify-center w-full gap-6 px-3.5">
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">AFFICHAGES VEHICULE</h2>
                <h3 className="flex p-3.5 gap-2.5">
                    <p>Respect affichage</p>
                    <p className="text-red-700">*</p>
                </h3>
                <div className='flex w-[95%] md:w-[97%] mx-2.5 mb-3.5'>
                    <div className='hidden md:block w-[30%]'></div>
                    <div className='flex w-full md:w-[70%] text-xs md:text-sm lg:text-base items-center justify-around px-2 md:px-3.5'>
                        <span>Conforme</span>
                        <span>Non conforme</span>
                    </div>
                </div>

                {/* Affichage destination*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0"> Affichage destination </label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Conforme"
                                {...register("affichageDestination", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non conforme"
                                {...register("affichageDestination", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>

                    </div>
                    {errors.affichageDestination && <p className="text-red-600">{errors.affichageDestination.message}</p>}
                </div>

                {/* Affichage ligne*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0"> Affichage ligne </label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Conforme"
                                {...register("affichageNumeroLigne", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non conforme"
                                {...register("affichageNumeroLigne", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                    </div>
                    {errors.affichageNumeroLigne && <p className="text-red-600">{errors.affichageNumeroLigne.message}</p>}
                </div>

                {/* Pictograme*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0"> Pictogramme transport enfants </label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Conforme"
                                {...register("pictoEnfant", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non conforme"
                                {...register("pictoEnfant", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                    </div>
                    {errors.pictoEnfant && <p className="text-red-600">{errors.pictoEnfant.message}</p>}
                </div>

                {/* Grille tarifaire*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0"> Affichage de la grille tarifaire </label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Conforme"
                                {...register("tarifAffiche", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non conforme"
                                {...register("tarifAffiche", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                    </div>
                    {errors.tarifAffiche && <p className="text-red-600">{errors.tarifAffiche.message}</p>}
                </div>

                {/* Présence réglement*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0"> Présence du règlement de transport </label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Conforme"
                                {...register("reglement", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non conforme"
                                {...register("reglement", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                    </div>
                    {errors.reglement && <p className="text-red-600">{errors.reglement.message}</p>}
                </div>

                {/* Dépliants horaires*/}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-10 p-2 md:p-0'>
                    <label className="flex w-full md:w-[30%] p-1.5 text-sm md:text-base mb-2 md:mb-0"> Dépliants horaires disponibles </label>
                    <div className="flex flex-row items-center justify-around gap-2 md:gap-3.5 mt-0 md:mt-2 p-2 md:p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Conforme"
                                {...register("depliantHoraire", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Non conforme"
                                {...register("depliantHoraire", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                    </div>
                    {errors.depliantHoraire && <p className="text-red-600">{errors.depliantHoraire.message}</p>}
                </div>


            </section>

        </div>
    )
}

export default AffichageVehicule