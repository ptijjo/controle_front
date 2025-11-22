import React from 'react';
import MultiStepForm from './components/MultiStepForm';

const Formulaire = () => {
    return (
        <main className="flex flex-col flex-grow items-center justify-center w-full">
            <h1 className='text-4xl font-extrabold text-red-600'>Formulaire de contrôle</h1>
            <MultiStepForm />
        </main>
    )
}

export default Formulaire