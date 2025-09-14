"use client"
import { User } from '@/interface/user.interface'
import { Url } from '@/lib/Url'
import axios from 'axios'
import React, { ReactNode, useEffect, useState } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>();

    useEffect(() => {
        const connected = async () => {
            try {
                const res = await axios.get(Url.me, { withCredentials: true });
                console.log("Utilisateur connecté :", res.data);
                setUser(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        connected();
    }, [])

    console.log("user : ",user)

    return (
        <>
            <header>Header</header>
            {children}
            <footer>Footer</footer>
        </>)
}

export default Layout