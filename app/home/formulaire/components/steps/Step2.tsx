import { InputsFormulaire } from "@/interface/inputFormulaire";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";


const Step2: React.FC = () => {
    const { control,register,formState: { errors }  } = useFormContext<InputsFormulaire>();

    // On "observe" la valeur du champ client
    const client = useWatch({ control, name: "client" });

    return (
        <div className="flex flex-col items-center justify-center w-full gap-6">
            {client === "casas" &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">CASAS</h2>
                    <label className="flex flex-row gap-1.5 p-3.5">
                        <p>Ligne</p>
                        <p className="text-red-600">*</p>
                    </label>
                    <div className="flex flex-col gap-2 mt-2 p-3.5">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="transavold"
                                {...register("ligne", { required: "La ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                            <span>TRANSAVOLD</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="transcool"
                                {...register("ligne", { required: "La ligne obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                            <span>TRANSCOOL</span>
                        </label>
                    </div>
                    {errors.ligne && <p className="text-red-600">{errors.ligne.message}</p>}
                </section>
            }
            {client === "rgeFluo57" &&
                <section className="flex flex-col w-full items-center justify-center">
                    <h2>RGE FLUO 57</h2>
                    <label className="flex flex-row gap-1.5">
                        <p>Type de Ligne</p>
                        <p className="text-red-600">*</p>
                    </label>
                  <div className="flex flex-col gap-2 mt-2">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="Lr"
                                {...register("typeLigne", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                        />
                        <span>Ligne Régulière</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="Sa"
                                {...register("typeLigne", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                        />
                        <span>Service Associé</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="Sc"
                                {...register("typeLigne", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                        />
                        <span>Service Scolaire</span>
                    </label>
                </div>
                {errors.typeLigne && <p className="text-red-600">{errors.typeLigne.message}</p>}
                </section>
            }
            {client === "casc" &&
                <section className="flex flex-col w-full items-center justify-center">
                    <h2>CASC</h2>
                    <label>
                        <p>Type deLigne</p>
                        <p>*</p>
                    </label>
                    <div className="flex flex-col gap-2 mt-2">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="Lr"
                                {...register("typeLigne", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                        />
                        <span>Ligne Régulière</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="Sc"
                                {...register("typeLigne", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                        />
                        <span>Service Scolaire</span>
                    </label>
                </div>
                {errors.typeLigne && <p className="text-red-600">{errors.typeLigne.message}</p>}
                </section>
            }
            {client === "forbus" &&
                <section className="flex flex-col w-full items-center justify-center">
                    <h2>FORBUS</h2>
                    <label>
                        <p>Type deLigne</p>
                        <p>*</p>
                    </label>
                    <div className="flex flex-col gap-2 mt-2">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="Lu"
                                {...register("typeLigne", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                        />
                        <span>Ligne Urbaine / Doublage</span>
                    </label>
                
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="Sc"
                                {...register("typeLigne", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                        />
                        <span>Service Scolaire</span>
                    </label>
                </div>
                {errors.typeLigne && <p className="text-red-600">{errors.typeLigne.message}</p>}
                </section>
            }
        </div>
    )
}

export default Step2;
