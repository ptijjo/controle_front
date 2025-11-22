"use client"
import { User } from '@/interface/user.interface'
import { Url } from '@/lib/Url'
import axios from 'axios'
import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Layout = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>();
    const navigate = useRouter();

    useEffect(() => {

        const connected = async () => {
            try {
                const res = await axios.get(Url.me, { withCredentials: true });
                setUser(res.data);
            } catch (err) {
                console.error(err);
                navigate.push("/")
            }
        };
        connected();
    }, [navigate])

    return (
        <div className="flex flex-col flex-grow items-center justify-center w-full ">
            {children}
        </div>)
}

export default Layout