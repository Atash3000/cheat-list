import React from 'react';
import Link from 'next/link'

function Header() {
  return (
    <header className='bg-primary h-20'>
      <div className='max-container'>
      <div className='flex flex-row justify-between md:justify-start items-center py-3'>
      <Link href='/'><a className='text-white-dark text-base sm:text-xl  md:text-2xl'>Cheat<span className='text-green'>List</span>.io</a></Link>
      </div>
      </div>
    </header>
  )
}

export default Header

