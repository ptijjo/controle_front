"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import React from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Signature from './Signature';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { InputsFormulaire } from '@/interface/inputFormulaire';
import axios from 'axios';
import { Url } from '@/lib/Url';



const Forms = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        control,
    } = useForm<InputsFormulaire>({
        defaultValues: {
            ficheHoraire: false,
            respectItineraire: false,
            affichageDestination: false,
            affichageNumeroLigne: false,
            pictoEnfant: false,
            tarifAffiche: false,
            depliantHoraire: false,
            reglement: false,
            tenue: false,
            carosserie: false,
            tableauBord: false,
            sol: false,
            temperature: false,
            luminosite: false,
        }
    });

    const onSubmit: SubmitHandler<InputsFormulaire> = async (data) => {
        console.log(data);

        const response = await axios.post(Url.form, data, {
            withCredentials: true
        })

        console.log(response.data)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-1.5 w-4/5 lg:w-3/4 items-center justify-center">
            <div className='flex flex-col items-center justify-center'>

                <h2>Environnement de contrôle</h2>
                <Label>Date</Label>
                <Input type="date" {...register("date")} />
                <section className='flex items-center justify-between gap-3.5 w-full'>
                    <div className='flex flex-col items-center justify-center'>
                        <Label>N° de Ligne</Label>
                        <Input type="text" placeholder='Service' className='w-[100px]' {...register("numeroLigne")} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Label>Type de ligne</Label>
                        <Controller
                            name="typeLigne"
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Type de ligne" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white text-black shadow-md rounded-md">
                                        <SelectItem value="Lr">Ligne régulière</SelectItem>
                                        <SelectItem value="Sc">Service scolaire</SelectItem>
                                        <SelectItem value="Sa">Service associé</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </div>
                </section>

                <section className='flex items-center justify-between gap-3.5 w-full'>
                    <div className='flex flex-col items-center justify-center'>
                        <Label>Heure Prévue</Label>
                        <Input type="time" {...register("heurePrevue")} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Label>Heure réelle</Label>
                        <Input type="time" {...register("heureReelle")} />
                    </div>
                </section>
            </div>
            {/*-------------- Infos Chauffeur ----------------*/}
            <div className='flex flex-col items-center justify-center'>
                <h2>Information du Chauffeur</h2>
                <section className='flex items-center justify-between gap-3.5 w-full mb-3.5' >
                    <Input type="text" placeholder='Nom' {...register("nom")} />
                    <Input type="text" placeholder='Prénom' {...register("prenom")} />
                </section>
                <Input
                    type="email"
                    placeholder="E-mail"
                    id="email"
                    autoComplete="off"
                    className="rounded pl-4"
                    {...register("email", {
                        required: "Email obligatoire",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Email invalide"
                        }
                    })} />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            {/*--------- Equipement et arret ----------*/}
            <div className='flex flex-col items-center justify-center'>
                <h2>Equipement arrêt</h2>
                <section className='flex items-center justify-between gap-3.5 w-full'>
                    <Label>Fiche horaire à l arrêt</Label>
                    <Controller
                        name="ficheHoraire"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                            <RadioGroup
                                className="flex items-center justify-center gap-3.5"
                                onValueChange={(val) => field.onChange(val === "true")}
                                value={field.value ? "true" : "false"}
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="true" id="oui" />
                                    <Label htmlFor="oui">Oui</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="false" id="non" />
                                    <Label htmlFor="non">Non</Label>
                                </div>
                            </RadioGroup>
                        )}
                    />
                </section>
                <h2>VEHICULE</h2>

                <Label>Respect arrêt itinéraire</Label>
                <Controller
                    name="respectItineraire"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                        <RadioGroup
                            className="flex items-center justify-center gap-3.5"
                            onValueChange={(val) => field.onChange(val === "true")}
                            value={field.value ? "true" : "false"}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="true" id="oui" />
                                <Label htmlFor="oui">Oui</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="false" id="non" />
                                <Label htmlFor="non">Non</Label>
                            </div>
                        </RadioGroup>
                    )}
                />

                <Label>Affichage destination</Label>
                <Controller
                    name="affichageDestination"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                        <RadioGroup
                            className="flex items-center justify-center gap-3.5"
                            onValueChange={(val) => field.onChange(val === "true")}
                            value={field.value ? "true" : "false"}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="true" id="oui" />
                                <Label htmlFor="oui">Oui</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="false" id="non" />
                                <Label htmlFor="non">Non</Label>
                            </div>
                        </RadioGroup>
                    )}
                />
                <Label>Affichage N° Ligne</Label>
                <Controller
                    name="affichageNumeroLigne"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                        <RadioGroup
                            className="flex items-center justify-center gap-3.5"
                            onValueChange={(val) => field.onChange(val === "true")}
                            value={field.value ? "true" : "false"}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="true" id="oui" />
                                <Label htmlFor="oui">Oui</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="false" id="non" />
                                <Label htmlFor="non">Non</Label>
                            </div>
                        </RadioGroup>
                    )}
                />
                <Label>Picto transport enfant</Label>
                <Controller
                    name="pictoEnfant"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                        <RadioGroup
                            className="flex items-center justify-center gap-3.5"
                            onValueChange={(val) => field.onChange(val === "true")}
                            value={field.value ? "true" : "false"}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="true" id="oui" />
                                <Label htmlFor="oui">Oui</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="false" id="non" />
                                <Label htmlFor="non">Non</Label>
                            </div>
                        </RadioGroup>
                    )}
                />
            </div>
            <h2>Equipement</h2>
            <Label>Tarif disponible / affichés</Label>
            <Controller
                name="tarifAffiche"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                    <RadioGroup
                        className="flex items-center justify-center gap-3.5"
                        onValueChange={(val) => field.onChange(val === "true")}
                        value={field.value ? "true" : "false"}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="true" id="oui" />
                            <Label htmlFor="oui">Oui</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="false" id="non" />
                            <Label htmlFor="non">Non</Label>
                        </div>
                    </RadioGroup>
                )}
            />
            <Label>Dépliants horaires disponibles</Label>
            <Controller
                name="depliantHoraire"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                    <RadioGroup
                        className="flex items-center justify-center gap-3.5"
                        onValueChange={(val) => field.onChange(val === "true")}
                        value={field.value ? "true" : "false"}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="true" id="oui" />
                            <Label htmlFor="oui">Oui</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="false" id="non" />
                            <Label htmlFor="non">Non</Label>
                        </div>
                    </RadioGroup>
                )}
            />
            <Label>Réglement</Label>
            <Controller
                name="reglement"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                    <RadioGroup
                        className="flex items-center justify-center gap-3.5"
                        onValueChange={(val) => field.onChange(val === "true")}
                        value={field.value ? "true" : "false"}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="true" id="oui" />
                            <Label htmlFor="oui">Oui</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="false" id="non" />
                            <Label htmlFor="non">Non</Label>
                        </div>
                    </RadioGroup>
                )}
            />
            <h2>CONDUCTEUR</h2>
            <Label>Tenue</Label>
            <Controller
                name="tenue"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                    <RadioGroup
                        className="flex items-center justify-center gap-3.5"
                        onValueChange={(val) => field.onChange(val === "true")}
                        value={field.value ? "true" : "false"}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="true" id="oui" />
                            <Label htmlFor="oui">Oui</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="false" id="non" />
                            <Label htmlFor="non">Non</Label>
                        </div>
                    </RadioGroup>
                )}
            />
            <Label>Carosserie</Label>
            <Controller
                name="carosserie"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                    <RadioGroup
                        className="flex items-center justify-center gap-3.5"
                        onValueChange={(val) => field.onChange(val === "true")}
                        value={field.value ? "true" : "false"}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="true" id="oui" />
                            <Label htmlFor="oui">Oui</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="false" id="non" />
                            <Label htmlFor="non">Non</Label>
                        </div>
                    </RadioGroup>
                )}
            />
            <Label>Tableau de bord</Label>
            <Controller
                name="tableauBord"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                    <RadioGroup
                        className="flex items-center justify-center gap-3.5"
                        onValueChange={(val) => field.onChange(val === "true")}
                        value={field.value ? "true" : "false"}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="true" id="oui" />
                            <Label htmlFor="oui">Oui</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="false" id="non" />
                            <Label htmlFor="non">Non</Label>
                        </div>
                    </RadioGroup>
                )}
            />
            <Label>Sol</Label>
            <Controller
                name="sol"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                    <RadioGroup
                        className="flex items-center justify-center gap-3.5"
                        onValueChange={(val) => field.onChange(val === "true")}
                        value={field.value ? "true" : "false"}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="true" id="oui" />
                            <Label htmlFor="oui">Oui</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="false" id="non" />
                            <Label htmlFor="non">Non</Label>
                        </div>
                    </RadioGroup>
                )}
            />
            <h2>CONFORT</h2>
            <Label>Temperature</Label>
            <Controller
                name="temperature"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                    <RadioGroup
                        className="flex items-center justify-center gap-3.5"
                        onValueChange={(val) => field.onChange(val === "true")}
                        value={field.value ? "true" : "false"}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="true" id="oui" />
                            <Label htmlFor="oui">Oui</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="false" id="non" />
                            <Label htmlFor="non">Non</Label>
                        </div>
                    </RadioGroup>
                )}
            />
            <Label>Luminosité</Label>
            <Controller
                name="luminosite"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                    <RadioGroup
                        className="flex items-center justify-center gap-3.5"
                        onValueChange={(val) => field.onChange(val === "true")}
                        value={field.value ? "true" : "false"}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="true" id="oui" />
                            <Label htmlFor="oui">Oui</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="false" id="non" />
                            <Label htmlFor="non">Non</Label>
                        </div>
                    </RadioGroup>
                )}
            />
            <h2>Voyageurs</h2>
            <Label>Nombre de Voyageurs</Label>
            <Input type="number" {...register("nbreVoyageur")} />
            <Label>Nombre de Voyageurs en situations irrégulière</Label>
            <Input type="number" {...register("nbreVoyageurIrregulier")} />
            <h2>Observation</h2>
            <textarea  {...register("observation")} className='border flex items-center justify-center w-full' />
            {/*----------Signatures ----------*/}
            <section className='flex flex-col lg:flex-row items-center justify-center gap-3.5 w-full mb-3.5'>
                <Signature
                    label='Signature Chauffeur'
                    onSave={(dataUrl) => setValue("chauffeurSignature", dataUrl)}
                />
                <Signature
                    label="Signature Contrôleur"
                    onSave={(dataUrl) => setValue("controllerSignature", dataUrl)}
                />

                {/* Champs cachés pour stocker les signatures */}
                <input type="hidden" {...register("chauffeurSignature")} />
                <input type="hidden" {...register("controllerSignature")} />
            </section>
            <Button
                type="submit"
                className="mt-2.5 bg-red-600 hover:bg-red-500 w-[80%] text-white md:w-1/2 mx-auto rounded-2xl">
                Valider
            </Button>
            <ToastContainer autoClose={2000} />
        </form>
    );
}

export default Forms