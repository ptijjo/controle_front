"use client"

import { User } from "@/interface/user.interface";
import { Url } from "@/lib/Url";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FaArrowLeft } from "react-icons/fa";

const ROLES = [
    { value: "controleur", label: "Contrôleur" },
    { value: "chef_service", label: "Chef de service" },
    { value: "agent", label: "Agent" },
] as const;

const UserPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<string>(user?.role ?? "");
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [deleting, setDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get<{ data: User; message: string }>(
                    `${Url.users}/${id}`,
                    { withCredentials: true }
                );
                setUser(res.data.data);
                setSelectedRole(res.data.data.role);
            } catch {
                setUser(null);
            }
        };
        fetchUser();
    }, [id]);

    useEffect(() => {
        if (user) setSelectedRole(user.role);
    }, [user?.role]);

    useEffect(() => {
        if (!modalOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [modalOpen]);

    const handleSaveRole = async () => {
        if (!user || selectedRole === user.role) {
            setModalOpen(false);
            return;
        }
        setSaving(true);
        setError(null);
        try {
            const res = await axios.patch<{ data: User; message: string }>(
                `${Url.users}/${user.id}`,
                { role: selectedRole },
                { withCredentials: true }
            );
            setUser(res.data.data);
            setModalOpen(false);
        } catch (err: unknown) {
            setError(
                axios.isAxiosError(err) && err.response?.data?.message
                    ? String(err.response.data.message)
                    : "Erreur lors de la mise à jour du rôle"
            );
        } finally {
            setSaving(false);
        }
    };

    const handleDeleteUser = async () => {
        if (!user) return;
        if (
            !window.confirm(
                `Supprimer définitivement l'utilisateur ${user.nom} ${user.prenom} (${user.email}) ? Cette action est irréversible.`
            )
        ) {
            return;
        }
        setDeleting(true);
        setDeleteError(null);
        try {
            await axios.delete(`${Url.users}/${user.id}`, { withCredentials: true });
            router.push("/home/user");
        } catch (err: unknown) {
            setDeleteError(
                axios.isAxiosError(err) && err.response?.data?.message
                    ? String(err.response.data.message)
                    : "Impossible de supprimer cet utilisateur (droits insuffisants ou erreur serveur)."
            );
        } finally {
            setDeleting(false);
        }
    };

    if (!user) {
        return (
            <main className="flex min-h-screen w-full flex-grow flex-col items-center justify-center px-4 py-8">
                <p className="text-gray-500">Chargement...</p>
            </main>
        );
    }

    return (
        <main className="flex flex-grow flex-col w-full min-h-screen px-4 py-8">
            <div className="mx-auto w-full max-w-md">
                <Link
                    href="/home/user"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-red-600"
                >
                    <FaArrowLeft className="size-3.5" />
                    Liste des utilisateurs
                </Link>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
                    <h1 className="mb-1 text-center text-2xl font-bold text-gray-900 md:text-3xl">
                        {user.nom} {user.prenom}
                    </h1>
                    <p className="mb-6 text-center text-sm text-gray-600">{user.email}</p>

                    <div className="flex flex-col items-center gap-2 border-t border-gray-100 pt-6">
                        <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
                            Rôle
                        </span>
                        <button
                            type="button"
                            onClick={() => setModalOpen(true)}
                            className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            {user.role}
                        </button>
                        <p className="text-center text-xs text-gray-400">
                            Cliquez pour modifier le rôle
                        </p>
                    </div>

                    <div className="mt-8 border-t border-gray-100 pt-6">
                        <Button
                            type="button"
                            variant="destructive"
                            onClick={handleDeleteUser}
                            disabled={deleting}
                            className="w-full bg-red-700 text-white hover:bg-red-600"
                        >
                            {deleting ? "Suppression…" : "Supprimer l'utilisateur"}
                        </Button>
                        {deleteError && (
                            <p className="mt-2 text-center text-sm text-red-600">{deleteError}</p>
                        )}
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/50 p-4"
                    onClick={() => !saving && setModalOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div
                        className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-900"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2
                            id="modal-title"
                            className="mb-4 text-center text-xl font-bold text-gray-900 dark:text-gray-100"
                        >
                            Modifier le rôle
                        </h2>
                        <p className="mb-4 text-center text-sm text-gray-600 dark:text-gray-400">
                            {user.nom} {user.prenom}
                        </p>
                        <div className="space-y-2">
                            <Label htmlFor="role-select" className="text-gray-700">
                                Rôle
                            </Label>
                            <Select
                                value={selectedRole}
                                onValueChange={setSelectedRole}
                                disabled={saving}
                            >
                                <SelectTrigger
                                    id="role-select"
                                    className="w-full border-gray-300 bg-white dark:bg-gray-900"
                                >
                                    <SelectValue placeholder="Choisir un rôle" />
                                </SelectTrigger>
                                <SelectContent className="z-[100] border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
                                    {ROLES.map((r) => (
                                        <SelectItem key={r.value} value={r.value}>
                                            {r.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        {error && (
                            <p className="mt-3 text-center text-sm text-red-600">{error}</p>
                        )}
                        <div className="mt-6 flex flex-row justify-end gap-3">
                            <Button
                                type="button"
                                onClick={() => setModalOpen(false)}
                                disabled={saving}
                                className="bg-gray-500 text-white hover:bg-gray-400"
                            >
                                Annuler
                            </Button>
                            <Button
                                type="button"
                                onClick={handleSaveRole}
                                disabled={saving || selectedRole === user.role}
                                className="bg-red-600 text-white hover:bg-red-500 disabled:opacity-50"
                            >
                                {saving ? "Enregistrement…" : "Enregistrer"}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default UserPage;
