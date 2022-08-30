import React from 'react';

function Jumbotron(props) {
  return (
    <section className=' bg-blue dark:bg-primary w-full flex flex-coltext-center pt-14'>
      <div className='max-container lg:w-3/4'>
        <h1 className='text-4xl md:text-5xl text-slate-50 dark:text-slate-300 leading-relaxed text-white-dark'>
          Cheat list by Atamurad
        </h1>
        <p className='text-xl md:text-2xl text-slate-200 dark:text-slate-300 leading-tight font-extralight tracking-wide mt-6 mb-20 '>
          Here are some cheatsheets and quick references contributed by open
          source angels.
        </p>
      </div>
    </section>
  );
}

export default Jumbotron;
