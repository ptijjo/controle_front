"use client"
import { User } from '@/interface/user.interface'
import { createContext, useContext, ReactNode } from 'react'

interface UserContextType {
  user: User | null
  setUser: (user: User | null) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export const UserProvider = ({ children, user, setUser }: { children: ReactNode, user: User | null | undefined, setUser: (user: User | null) => void }) => {
  return (
    <UserContext.Provider value={{ user: user || null, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
