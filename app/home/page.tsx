"use client"
import React from 'react';
import { FaWpforms } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa";
import Link from 'next/link'
import { Url } from '@/lib/Url';


const Home = () => {


    return (
        <main className="flex flex-col flex-grow items-center justify-center w-full h-full">
            <h1 className='text-5xl font-bold'>Contrôle</h1>
            <div className='flex flex-row gap-[5%] items-center justify-center w-full h-full'>
                <div className='flex flex-col items-center justify-center'>
                    <Link href="/home/formulaire"> <FaWpforms className='text-8xl text-red-600 hover:text-red-500 hover:scale-105 hover:cursor-pointer' /></Link>
                    <p>Nouveau Formulaire</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Link href={Url.download} target="_blank" rel="noopener noreferrer"><FaFileExcel className='text-8xl text-red-600 hover:text-red-500 hover:scale-105 hover:cursor-pointer' /></Link>
                    <p>Extraction de donées</p>
                </div>
            </div>
        </main>
    )
}

export default Home