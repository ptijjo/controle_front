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
                 <div className='flex w-full text-sm md:text-lg items-center mb-3.5'>
                     <span className='relative left-[26%] md:left-[32%] md:w-1/3'>Propre</span>
                     <span className='relative left-[36%] md:left-[20%] w-2 md:w-1/3'>Moyen</span>
                     <span className='relative left-[56%] md:left-[10%] w-2 md:w-1/3'>Sale</span>
                 </div>
 
                 {/* Tableau de bord*/}
                 <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5'>
                     <label className="flex w-[30%] p-1.5">Tableau de bord</label>
                     <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
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
                 <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5'>
                     <label className="flex w-[30%] p-1.5"> Sol</label>
                     <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
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
                 <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-2.5'>
                     <label className="flex w-[30%] p-1.5"> Vitres </label>
                     <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
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
                 <div className='flex items-center justify-center w-[95%] md:w-[97%] bg-[#f8f9fa] mx-2.5 mb-10'>
                     <label className="flex w-[30%] p-1.5"> Sièges </label>
                     <div className="flex flex-row  items-center justify-around gap-3.5 mt-2 p-3.5 w-full">
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


             <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden p-3.5">
                 <label>
                     Observations Etat générale du véhicule
                 </label>
                 <input
                        type="text"
                        {...register("observationConditionsVehicule")}
                        placeholder='Votre réponse'
                        className="border-b border-b-gray-300 rounded p-2 text-base w-3/4 md:w-[95%] mb-10"
                    />
             </section>
 
         </div>
     )
}

export default PropreteInterieure