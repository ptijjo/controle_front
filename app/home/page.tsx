"use client"
import { FaWpforms } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import Link from 'next/link'
import { Url } from '@/lib/Url';
import { useUser } from './context/UserContext';


const Home = () => {
    const { user } = useUser();
    const canAddUser = user && (user.role === "controleur" || user.role === "chef_service");

    return (
        <main className="flex flex-col flex-grow items-center justify-center w-full min-h-screen px-4 py-8 gap-8 md:gap-12">
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>Contrôle</h1>
            <div className='flex flex-col md:flex-row gap-8 md:gap-[5%] items-center justify-center w-full max-w-4xl'>
                <div className='flex flex-col items-center justify-center gap-3 md:gap-4'>
                    <Link href="/home/formulaire" className="transition-transform hover:scale-105">
                        <FaWpforms className='text-6xl md:text-7xl lg:text-8xl text-red-600 hover:text-red-500 cursor-pointer' />
                    </Link>
                    <p className="text-sm md:text-base text-center">Nouveau Formulaire</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-3 md:gap-4'>
                    <Link href={Url.download} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                        <FaFileExcel className='text-6xl md:text-7xl lg:text-8xl text-red-600 hover:text-red-500 cursor-pointer' />
                    </Link>
                    <p className="text-sm md:text-base text-center">Extraction de données</p>
                </div>
                {canAddUser && (
                    <div className='flex flex-col items-center justify-center gap-3 md:gap-4'>
                        <Link href="/home/ajouter-utilisateur" className="transition-transform hover:scale-105">
                            <FaUserPlus className='text-6xl md:text-7xl lg:text-8xl text-red-600 hover:text-red-500 cursor-pointer' />
                        </Link>
                        <p className="text-sm md:text-base text-center">Ajouter un utilisateur</p>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Home