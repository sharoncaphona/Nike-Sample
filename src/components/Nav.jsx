import React from 'react'
import{headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
   <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-start max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 justify-center items-center gap-16 max-lg:hidden'>
            
        </ul>
    </nav>
   </header>
  )
}

export default Nav