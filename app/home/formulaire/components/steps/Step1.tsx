import { InputsFormulaire } from "@/interface/inputFormulaire";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const Step1: React.FC = () => {
    const { register, control, formState: { errors } } = useFormContext<InputsFormulaire>();

    return (
        <div>
            <section>
                <label>
                    <p>Adresse e-mail</p>
                    <p>*</p>
                </label>
                <input type="email" {...register("email", { required: "L'e-mail est obligatoire" })} />
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
            </section>
            <section>
                <label>
                    <p>Date du contrôle?</p>
                    <p>*</p>
                </label>
                <input type="date" {...register("date", { required: "La date est obligatoire" })} />
                {errors.date && <p style={{ color: "red" }}>{errors.date.message}</p>}
            </section>
            <section>
                <label>
                    <p>Heure arrivée contrôleur</p>
                    <p>*</p>
                </label>
                <input type="time" {...register("heureReelle", { required: "L'heure d'arrivée du contrôleur est obligatoire" })} />
                {errors.heureReelle && <p style={{ color: "red" }}>{errors.heureReelle.message}</p>}
            </section>
            <section>
                <label>
                    <p>Heure prévue d arrivée du véhicule</p>
                    <p>*</p>
                </label>
                <input type="time" {...register("heurePrevue", { required: "L'heure d'arrivée du véhicule est obligatoire" })} />
                {errors.heurePrevue && <p style={{ color: "red" }}>{errors.heurePrevue.message}</p>}
            </section>

            <section>
                <Label>
                    <p>Météo</p>
                    <p>*</p>
                </Label>
                <Controller
                    name="meteo"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup
                            className="flex items-center justify-center gap-3.5"
                            onValueChange={field.onChange}
                            value={field.value}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="beau" id="beau" />
                                <Label htmlFor="beau">Beau (ensoleillé ou nuageux mais sec)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="pluvieux" id="pluvieux" />
                                <Label htmlFor="pluvieux">Pluvieux,Neigeux(temps humide)</Label>
                            </div>
                        </RadioGroup>
                    )}
                />
            </section>

            <section>
                <label>
                    <p>Lieux du contrôle?</p>
                    <p>*</p>
                </label>
                <input type="text" {...register("lieuControle", { required: "Le lieu de contrôle est obligatoire" })} />
                {errors.lieuControle && <p style={{ color: "red" }}>{errors.lieuControle.message}</p>}
            </section>

            <section>
                <Label>
                    <p>Client ?</p>
                    <p>*</p>
                </Label>
                <Controller
                    name="client"
                    control={control}
                    render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Selectionner" />
                            </SelectTrigger>

                            <SelectContent className="bg-white">
                                <SelectItem value="casas">CASAS</SelectItem>
                                <SelectItem value="rgeFluo57">RGE FLUO57</SelectItem>
                                <SelectItem value="casc">CASC</SelectItem>
                                <SelectItem value="forbus">FORBUS</SelectItem>
                                <SelectItem value="apeiMoselle">APEI Moselle</SelectItem>
                                <SelectItem value="hombourgHaut">HOMBOURG HAUT</SelectItem>
                                <SelectItem value="autres">AUTRES</SelectItem>
                            </SelectContent>
                        </Select>

                    )}
                />
            </section>
        </div>
    );
};

export default Step1;
