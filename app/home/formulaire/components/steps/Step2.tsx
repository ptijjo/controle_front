import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InputsFormulaire } from "@/interface/inputFormulaire";
import React from "react";
import { useFormContext, Controller, useWatch } from "react-hook-form";


const Step2: React.FC = () => {
    const { control,register,formState: { errors }  } = useFormContext<InputsFormulaire>();

    // On "observe" la valeur du champ client
    const client = useWatch({ control, name: "client" });

    return (
        <div>
            {client === "casas" &&
                <section>
                    <h2>CASAS</h2>
                    <label>
                        <p>Ligne</p>
                        <p>*</p>
                    </label>
                    <div className="flex flex-col gap-2 mt-2">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="transavold"
                                {...register("ligne", { required: "La ligne est obligatoire" })}
                            />
                            <span>TRANSAVOLD</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="transcool"
                                {...register("ligne", { required: "La ligne obligatoire" })}
                            />
                            <span>TRANSCOOL</span>
                        </label>
                    </div>
                    {errors.ligne && <p className="text-red-600">{errors.ligne.message}</p>}
                </section>
            }
            {client === "rgeFluo57" &&
                <section>
                    <h2>RGE FLUO 57</h2>
                    <label>
                        <p>Type de Ligne</p>
                        <p>*</p>
                    </label>
                    <Controller
                        name="typeLigne"
                        control={control}
                        render={({ field }) => (
                            <RadioGroup
                                className="flex items-center justify-center gap-3.5"
                                onValueChange={field.onChange}
                                value={field.value}
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Lr" id="Lr" />
                                    <label htmlFor="Lr">Régulières</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Sa" id="Sa" />
                                    <label htmlFor="Sa">Associées</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Sc" id="Sc" />
                                    <label htmlFor="Sc">Scolaires</label>
                                </div>
                            </RadioGroup>
                        )}
                    />
                </section>
            }
            {client === "casc" &&
                <section>
                    <h2>CASC</h2>
                    <label>
                        <p>Type deLigne</p>
                        <p>*</p>
                    </label>
                    <Controller
                        name="typeLigne"
                        control={control}
                        render={({ field }) => (
                            <RadioGroup
                                className="flex items-center justify-center gap-3.5"
                                onValueChange={field.onChange}
                                value={field.value}
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Lr" id="Lr" />
                                    <label htmlFor="Lr">Régulières</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Sc" id="Sc" />
                                    <label htmlFor="Sc">Scolaires</label>
                                </div>
                            </RadioGroup>
                        )}
                    />
                </section>
            }
            {client === "forbus" &&
                <section>
                    <h2>FORBUS</h2>
                    <label>
                        <p>Type deLigne</p>
                        <p>*</p>
                    </label>
                    <Controller
                        name="typeLigne"
                        control={control}
                        render={({ field }) => (
                            <RadioGroup
                                className="flex items-center justify-center gap-3.5"
                                onValueChange={field.onChange}
                                value={field.value}
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Lu" id="Lu" />
                                    <label htmlFor="Lr">Urbaines/Doublage Scolaires</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Sc" id="Sc" />
                                    <label htmlFor="Sc">Scolaires</label>
                                </div>
                            </RadioGroup>
                        )}
                    />
                </section>
            }
        </div>
    )
}

export default Step2;
