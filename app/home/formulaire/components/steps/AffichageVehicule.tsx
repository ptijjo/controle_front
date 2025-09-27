import { InputsFormulaire } from '@/interface/inputFormulaire';
import React from 'react'
import { useFormContext } from 'react-hook-form';

const AffichageVehicule = () => {
     const { register } = useFormContext<InputsFormulaire>();
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 px-3.5">
            <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">AFFICHAGES VEHICULE</h2>
                <h3 className="flex p-3.5 gap-2.5">
                    <p>Respect affichage</p>
                    <p className="text-red-700">*</p>
                </h3>
                <div className='flex w-full mb-3.5'>
                    <span className='relative left-[35%] md:left-[38%]'>Conforme</span>
                    <span className='relative left-[45%] md:left-[60%]'>Non conforme</span>
                </div>

                {/* Affichage destination*/}
                <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5'>
                    <label className="flex w-[30%] p-1.5"> Affichage destination </label>
                    <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="conforme"
                                {...register("affichageDestination", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="nonConforme"
                                {...register("affichageDestination", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                    </div>
                </div>

                {/* Affichage ligne*/}
                <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5'>
                    <label className="flex w-[30%] p-1.5"> Affichage ligne </label>
                    <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="conforme"
                                {...register("affichageLigne", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="nonConforme"
                                {...register("affichageLigne", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                    </div>
                </div>

                 {/* Pictograme*/}
                <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5'>
                    <label className="flex w-[30%] p-1.5"> Pictogramme transport enfants </label>
                    <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="conforme"
                                {...register("pictoEnfant", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="nonConforme"
                                {...register("pictoEnfant", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                    </div>
                </div>

                 {/* Grille tarifaire*/}
                <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5'>
                    <label className="flex w-[30%] p-1.5"> Affichage de la grille tarifaire </label>
                    <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="conforme"
                                {...register("affichageTarif", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="nonConforme"
                                {...register("affichageTarif", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                    </div>
                </div>

                   {/* Présence réglement*/}
                <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5'>
                    <label className="flex w-[30%] p-1.5"> Présence du règlement de transport </label>
                    <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="conforme"
                                {...register("affichageReglement", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="nonConforme"
                                {...register("affichageReglement", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                    </div>
              </div>
              
                   {/* Dépliants horaires*/}
                <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-10'>
                    <label className="flex w-[30%] p-1.5"> Dépliants horaires disponibles </label>
                    <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="conforme"
                                {...register("depliantHoraire", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="nonConforme"
                                {...register("depliantHoraire", { required: "Tous les champs sont obligatoires" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />

                        </label>
                    </div>
                </div>


            </section>

        </div>
  )
}

export default AffichageVehicule