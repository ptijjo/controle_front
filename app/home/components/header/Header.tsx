import { User } from '@/interface/user.interface'
import React from 'react'

const Header = ({ user }: { user: User }) => {
  return (
    <header className='flex flex-row items-center justify-between w-full min-h-[60px] md:h-[10%] border-b px-4 md:px-6 py-2 md:py-4'>
      <span className='text-sm md:text-base font-medium'>{user.nom} {user.prenom}</span>
      <span className='text-xs md:text-sm text-gray-600'>{user.role}</span>
    </header>
  )
}

export default Header