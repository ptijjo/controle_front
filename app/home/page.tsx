"use client"
import { FaUser, FaWpforms } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { Url } from '@/lib/Url';
import { useUser } from './context/UserContext';
import { Button } from "@/components/ui/button";


const Home = () => {
    const { user, setUser } = useUser();
    const router = useRouter();
    const [loggingOut, setLoggingOut] = useState(false);
    const canAddUser = user && (user.role === "controleur" || user.role === "chef_service");
    const canSeeUsers = user && (user.role === "controleur" || user.role === "chef_service");

    const handleLogout = async () => {
        setLoggingOut(true);
        try {
            await axios.post(Url.logOut, {}, { withCredentials: true });
        } catch {
            // On déconnecte quand même côté UI si l’API échoue
        } finally {
            setUser(null);
            setLoggingOut(false);
            router.push("/");
        }
    };

    return (
        <main className="relative flex flex-col flex-grow items-center justify-center w-full min-h-screen px-4 py-8 gap-8 md:gap-12">
            <Button
                type="button"
                onClick={handleLogout}
                disabled={loggingOut}
                variant="outline"
                className="fixed right-3 top-3 z-50 gap-2 border-gray-400 bg-white/95 text-gray-800 shadow-sm backdrop-blur-sm hover:bg-gray-100 md:right-5 md:top-5"
            >
                <FaSignOutAlt className="size-4" />
                {loggingOut ? "Déconnexion…" : "Déconnexion"}
            </Button>
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

                {canSeeUsers && (
                    <div className='flex flex-col items-center justify-center gap-3 md:gap-4'>
                        <Link href="/home/user" className="transition-transform hover:scale-105">
                            <FaUser className='text-6xl md:text-7xl lg:text-8xl text-red-600 hover:text-red-500 cursor-pointer' />
                        </Link>
                        <p className="text-sm md:text-base text-center">Liste des utilisateurs</p>
                    </div>
                )}
            </div>
        </main >
    )
};

export default Home