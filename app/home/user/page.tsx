"use client"

import { User } from "@/interface/user.interface";
import { Url } from "@/lib/Url";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const UserPage = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(Url.users, { withCredentials: true });
            setUsers(res.data.data);
        };
        fetchUsers();
    }, []);

    return (
        <main className="flex flex-col flex-grow w-full min-h-screen px-4 py-8">
            <div className="mx-auto w-full max-w-2xl">
                <Link
                    href="/home"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-red-600"
                >
                    <FaArrowLeft className="size-3.5" />
                    Retour à l&apos;accueil
                </Link>

                <h1 className="mb-6 text-center text-3xl font-bold md:mb-8 md:text-4xl">
                    Liste des utilisateurs
                </h1>

                <div className="flex flex-col gap-3">
                    {users.map((user) => (
                        <Link
                            href={`/home/user/${user.id}`}
                            key={user.id}
                            className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-all hover:border-red-200 hover:shadow-lg"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <h2 className="text-lg font-bold text-gray-800">
                                    {user.nom} {user.prenom}
                                </h2>
                                <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white">
                                    {user.role}
                                </span>
                            </div>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </Link>
                    ))}
                </div>

                {users.length === 0 && (
                    <p className="py-12 text-center text-gray-500">
                        Aucun utilisateur à afficher.
                    </p>
                )}
            </div>
        </main>
    );
};

export default UserPage;
