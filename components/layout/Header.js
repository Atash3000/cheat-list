import React,{useState,useContext} from 'react';
import Link from 'next/link'
import {context} from '../../context/MainContext';
import Switcher from '../util/Switcher';
import {GrCode} from 'react-icons/gr';
import {FaCode} from 'react-icons/fa'

function Header() {
  const {value,handleSwitch} = useContext(context)

  return (
    <header className='home bg-blue-500 dark:bg-slate-800'>
      <div className='max-container z-10'>
        <div className='flex flex-row justify-between md:justify-start items-center py-3'>
          <Link href='/'>
            <a className='text-slate-100 dark:text-slate-400 text-base sm:text-xl md:text-2xl flex flex-row flex-nowrap items-center'>
             <span className='bg-green-400 dark:bg-green-700 hidden md:flex justify-center w-10 h-10 md:w-12 md:h-12 text-slate-100 dark:text-slate-400 p-2 rounded-full  mr-3' >
               <FaCode className=' self-center text-2xl '/>
              </span> 
              Cheat<span className='text-green-400 dark:text-green-700'>List</span>.io
            </a>
          </Link>
          <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
             <Switcher onChange={handleSwitch} value={value}/>
          </div>  
        </div>
      </div>
    </header>
  )
}
export default Header

