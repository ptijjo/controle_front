import React from 'react';
import Forms from './components/Formulaire';
import MultiStepForm from './components/MultiStepForm';

const Formulaire = () => {
    return (
        <main className="flex flex-col items-center justify-center w-full">
            <h1>Formulaire</h1>
            {/* <Forms/> */}
            <MultiStepForm />
        </main>
    )
}

export default Formulaire