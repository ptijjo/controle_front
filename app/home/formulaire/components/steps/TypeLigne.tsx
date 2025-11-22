import { InputsFormulaire } from "@/interface/inputFormulaire";
import React, { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";


const TypeLigne: React.FC = () => {
    const { control, register, formState: { errors }, setValue } = useFormContext<InputsFormulaire>();

    // On "observe" la valeur du champ client
    const client = useWatch({ control, name: "client" });

    // Réinitialiser les champs de type de ligne quand le client change
    useEffect(() => {
        setValue("ligneCasas", undefined);
        setValue("ligneRge", undefined);
        setValue("ligneCasc", undefined);
        setValue("ligneForbus", undefined);
        setValue("ligneHH", undefined);
    }, [client, setValue]);

    return (
        <div className="flex flex-col items-center justify-center w-full gap-6">
            {/**CASAS */}
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
                                {...register("ligneCasas", { required: "La ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                            <span>TRANSAVOLD</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="transchool"
                                {...register("ligneCasas", { required: "La ligne obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                            <span>TRANSCHOOL</span>
                        </label>
                    </div>
                    {errors.ligneCasas && <p className="text-red-600">{errors.ligneCasas.message}</p>}
                </section>
            }

            {/**RGE FLUO 57 */}
            {client === "rgeFluo57" &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">RGE FLUO 57</h2>
                    <label className="flex flex-row gap-1.5 p-3.5">
                        <p>Type de Ligne</p>
                        <p className="text-red-600">*</p>
                    </label>
                    <div className="flex flex-col gap-2 mt-2 p-3.5">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Lr"
                                {...register("ligneRge", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                            <span>Ligne Régulière</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Sa"
                                {...register("ligneRge", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                            <span>Service Associé</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Sc"
                                {...register("ligneRge", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                            <span>Service Scolaire</span>
                        </label>
                    </div>
                    {errors.ligneRge && <p className="text-red-600">{errors.ligneRge.message}</p>}
                </section>
            }

            {/**CASC */}
            {client === "casc" &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">CASC</h2>
                    <label className="flex flex-row gap-1.5 p-3.5">
                        <p>Type deLigne</p>
                        <p className="text-red-600">*</p>
                    </label>
                    <div className="flex flex-col gap-2 mt-2 p-3.5">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Lr"
                                {...register("ligneCasc", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                            <span>Ligne Régulière</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Sa"
                                {...register("ligneCasc", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                            <span>Service Associé</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Sc"
                                {...register("ligneCasc", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                            <span>Service Scolaire</span>
                        </label>
                    </div>
                    {errors.ligneCasc && <p className="text-red-600">{errors.ligneCasc.message}</p>}
                </section>
            }

            {/* FORBUS */}
            {client === "forbus" &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">FORBUS</h2>
                    <label className="flex flex-row gap-1.5 p-3.5">
                        <p>Type de Ligne</p>
                        <p className="text-red-600">*</p>
                    </label>
                    <div className="flex flex-col gap-2 mt-2 p-3.5">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Doublage"
                                {...register("ligneForbus", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                            <span>Ligne de Doublage</span>
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="CSCAF"
                                {...register("ligneForbus", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                            <span>Service CSCAF</span>
                        </label>
                    </div>
                    {errors.ligneForbus && <p className="text-red-600">{errors.ligneForbus.message}</p>}
                </section>
            }

            {/* HOMBOURG HAUT */}
            {client === "hombourgHaut" &&
                <section className="flex flex-col items-start justify-center bg-white w-full md:w-3/4 rounded-lg overflow-hidden">
                    <h2 className="bg-[#ac504f] flex w-full items-center justify-items-start text-white text-xl h-[50px] text-center p-3.5">HOMBOURG HAUT</h2>
                    <label className="flex flex-row gap-1.5 p-3.5">
                        <p>Type de Ligne</p>
                        <p className="text-red-600">*</p>
                    </label>
                    <div className="flex flex-col gap-2 mt-2 p-3.5">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Sc"
                                {...register("ligneHH", { required: "Le type de ligne est obligatoire" })}
                                className='w-6 h-6 text-red-600 border-gray-300 focus:ring-red-500'
                            />
                            <span>Service Scolaire</span>
                        </label>
                    </div>
                    {errors.ligneHH && <p className="text-red-600">{errors.ligneHH.message}</p>}
                </section>
            }

            {/* APEI MOSELLE */}

            {/* AUTRES */}
        </div>
    )
}

export default TypeLigne;
