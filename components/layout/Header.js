import React,{useState,useContext} from 'react';
import Link from 'next/link'
import {context} from '../../context/MainContext';
import Switcher from '../util/Switcher';
import {GrCode} from 'react-icons/gr';
import {FaCode} from 'react-icons/fa'

function Header() {
  const {value,handleCheckbox} = useContext(context)

  return (
    <header className='bg-blue dark:bg-primary-light h-20'>
      <div className='max-container z-10'>
        <div className='flex flex-row justify-between md:justify-start items-center py-3'>
          <Link href='/'>
            <a className='text-white dark:text-white-dark text-base sm:text-xl md:text-2xl flex flex-row flex-nowrap items-center'>
             <span className='bg-green dark:bg-green-dark hidden md:flex justify-center w-10 h-10 md:w-12 md:h-12 text-white dark:text-white-dark p-2 rounded-full  mr-3' ><FaCode className=' self-center text-2xl '/> </span> 
              Cheat<span className='text-green'>List</span>.io
            </a>
          </Link>
          <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
             <Switcher onChange={handleCheckbox} value={value}/>
          </div>  
        </div>
      </div>
    </header>
  )
}
export default Header

