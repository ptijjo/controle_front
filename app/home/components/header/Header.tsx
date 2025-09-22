import { User } from '@/interface/user.interface'
import React from 'react'

const Header = ({ user }: { user: User }) => {
  return (
    <header className='flex flex-row w-full h-[10%] border'>
      {user.nom}
    </header>
  )
}

export default Header