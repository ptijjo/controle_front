"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios, { AxiosError } from "axios";
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Url } from "@/lib/Url";


type Inputs = {
    email: string
    password: string
}
const LoginPage = () => {

    const navigate = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            await axios.post(
                Url.logIn,
                data,
                { withCredentials: true });

            toast.success("Connexion réussie !");

            setTimeout(() => {
                navigate.push("/home")
            }, 2000);

        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data?.message || "Une erreur est survenue");
            } else {
                toast.error("Une erreur est survenue");
            }
        }
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-1.5 w-4/5 md:w-1/2 lg:w-1/3 items-center justify-center">
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
            <Input
                type="password"
                placeholder="password"
                id="password"
                autoComplete="off"
                className="rounded"
                {...register("password",
                    { required: "Mot de passe obligatoire" })} />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            <Button
                type="submit"
                className="mt-2.5 bg-red-600 hover:bg-red-500 w-[80%] text-white md:w-1/2 mx-auto rounded-2xl">
                Se connecter
            </Button>
            <ToastContainer autoClose={2000} />
        </form>
    );
}

export default LoginPage