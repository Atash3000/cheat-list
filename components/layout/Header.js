import React,{useState,useContext} from 'react';
import Link from 'next/link'
import {context} from '../../context/MainContext';
import Switcher from '../util/Switcher';


function Header() {
  const {value,handleCheckbox} = useContext(context)

  return (
    <header className='bg-blue dark:bg-primary h-20'>
      <div className='max-container z-10'>
        <div className='flex flex-row justify-between md:justify-start items-center py-3'>
          <Link href='/'><a className='text-white-dark text-base sm:text-xl  md:text-2xl'>Cheat<span className='text-green'>List</span>.io</a></Link>
          <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
             <Switcher onChange={handleCheckbox} value={value}/>
           </div>  
        </div>
      </div>
    </header>
  )
}

export default Header

