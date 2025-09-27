import React from 'react'
import Signature from '../Signature'
import { useFormContext } from 'react-hook-form';
import { InputsFormulaire } from '@/interface/inputFormulaire';

const StepSignature = () => {

    const { register, setValue, formState: { errors } } = useFormContext<InputsFormulaire>();
    return (
        <div>
            <section className='flex flex-col lg:flex-row items-center justify-center gap-3.5 w-full mb-3.5'>
                <Signature
                    label='Signature Chauffeur'
                    onSave={(dataUrl) => {
                        setValue("chauffeurSignature", dataUrl, { shouldValidate: true })
                    }}
                />
                <Signature
                    label="Signature Contrôleur"
                    onSave={(dataUrl) => {
                        setValue("controllerSignature", dataUrl, { shouldValidate: true })
                    }}
                />

                {/* Champs cachés pour stocker les signatures */}
                <input type="hidden" {...register("chauffeurSignature", { required: "La signature du chauffeur est obligatoire" })} />
                {errors.chauffeurSignature && <p style={{ color: "red" }}>{errors.chauffeurSignature.message}</p>}

                <input type="hidden" {...register("controllerSignature", { required: "La signature du contrôleur est obligatoire" })} />
                {errors.controllerSignature && <p style={{ color: "red" }}>{errors.controllerSignature.message}</p>}

            </section>
        </div>
    )
}

export default StepSignature