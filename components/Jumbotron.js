import React from 'react';

function Jumbotron(props) {
  return (
    <div className='flex flex-col w-full mx-auto text-center my-8'>
      <div className='max-container w-full'>
        <h1 className='text-5xl mb-4'>
          <span className='text-slate-700 dark:text-slate-300 font-light mr-2'>
            {props.title||''}
          </span>
          <span className='text-slate-400 dark:text-slate-500 font-extralight hidden md:inline'>
            cheatsheet
          </span>
        </h1>
        <div className='lg:w-3/5 mx-auto intro leading-relaxed text-slate-600'>
          <p>
            {props.intro||""}
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
