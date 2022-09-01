import React from 'react'

function MainContainer({posts}) {
  return (
    <section className='w-full flex flex-col bg-blue-500 dark:bg-slate-800 text-center pt-14'>
      <div className='max-container lg:w-3/4'>
        <h1 className='text-4xl md:text-5xl text-slate-50 dark:text-slate-300 leading-relaxed'>
          Cheat list by Atamurad X
        </h1>
        <p className='text-xl md:text-2xl text-white dark:text-white-dark leading-tight font-extralight tracking-wide mt-6 mb-20 text-center  '>
          Here are some cheatsheets and quick references contributed by open
          source angels.
        </p>
      </div>
    </section>
  )
}

export default MainContainer


