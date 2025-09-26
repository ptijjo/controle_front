import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InputsFormulaire } from "@/interface/inputFormulaire";
import React from "react";
import { useFormContext, Controller, useWatch } from "react-hook-form";


const Step2: React.FC = () => {
    const { control } = useFormContext<InputsFormulaire>();

     // On "observe" la valeur du champ client
  const client = useWatch({ control, name: "client" });

    return (
        <div>
            {client === "casas" &&
                <section>
                    <h2>CASAS</h2>
                    <Label>
                        <p>Ligne</p>
                        <p>*</p>
                    </Label>
                    <Controller
                        name="ligne"
                        control={control}
                        render={({ field }) => (
                            <RadioGroup
                                className="flex items-center justify-center gap-3.5"
                                onValueChange={field.onChange}
                                value={field.value}
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="transavold" id="transavold" />
                                    <Label htmlFor="transavold">TRANSAVOLD</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="transcool" id="transcool" />
                                    <Label htmlFor="transcool">TRANSCOOL</Label>
                                </div>
                            </RadioGroup>
                        )}
                    />
                </section>
            }
               {client === "rgeFluo57" &&
                <section>
                    <h2>RGE FLUO 57</h2>
                    <Label>
                        <p>Type de Ligne</p>
                        <p>*</p>
                    </Label>
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
                                    <Label htmlFor="Lr">Régulières</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Sa" id="Sa" />
                                    <Label htmlFor="Sa">Associées</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Sc" id="Sc" />
                                    <Label htmlFor="Sc">Scolaires</Label>
                                </div>
                            </RadioGroup>
                        )}
                    />
                </section>
            }
               {client === "casc" &&
                <section>
                    <h2>CASC</h2>
                    <Label>
                        <p>Type deLigne</p>
                        <p>*</p>
                    </Label>
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
                                    <Label htmlFor="Lr">Régulières</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Sc" id="Sc" />
                                    <Label htmlFor="Sc">Scolaires</Label>
                                </div>
                            </RadioGroup>
                        )}
                    />
                </section>
            }
               {client === "forbus" &&
                <section>
                    <h2>FORBUS</h2>
                    <Label>
                        <p>Type deLigne</p>
                        <p>*</p>
                    </Label>
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
                                    <Label htmlFor="Lr">Urbaines/Doublage Scolaires</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Sc" id="Sc" />
                                    <Label htmlFor="Sc">Scolaires</Label>
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
