import React from 'react';
import {FaFacebookF} from 'react-icons/fa'
import Link from 'next/link';

function Footer() {

  let currYear = new Date().getFullYear() 
  return (
    <footer className='text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 md:mt-14'>
      <div className='max-container mb-8 md:py-10 mx-auto flex md:items-center lg:items-start md:flex-row flex-col'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:flex-grow md:flex -mb-10 md:mt-0 mt-10'>
          <div className='md:w-1/2 md:pr-4'>
            <h2 className='my-6 text-xl text-slate-700 dark:text-slate-300'>
              Top <span className='text-slate-400'>Cheatsheet</span>
            </h2>
            <section className='w-full grid grid-cols-2 gap-2 md:gap-4'>
              <Link  href='/python'> 
              <a
                className='group flex items-center p-3 bg-white rounded-lg hover:shadow dark:bg-slate-900 hover:bg-green-500'
              >
                <div className='ml-4'>
                  <p className='mb-1 text-sm font-medium text-slate-900 dark:text-slate-300 group-hover:text-white'>
                    Python
                    <span className='text-slate-400 group-hover:text-white'>
                      Cheatsheet
                    </span>
                  </p>
                  <p className='text-sm font-normal text-slate-400 group-hover:text-white'>
                    Cheat List
                  </p>
                </div>
              </a>
              </Link>
              <Link href='/javascript' > 
              <a
                className='group flex items-center p-3 bg-white rounded-lg hover:shadow dark:bg-slate-900 hover:bg-green-500'
              >
                <div className='ml-4'>
                  <p className='mb-1 text-sm font-medium text-slate-900 dark:text-slate-300 group-hover:text-white'>
                    JavaScript
                    <span className='text-slate-400 group-hover:text-white'>
                      Cheatsheet
                    </span>
                  </p>
                  <p className='text-sm font-normal text-slate-400 group-hover:text-white'>
                    Cheat List
                  </p>
                </div>
              </a>
              </Link>
              <Link href='/vim'> 
              <a
                className='group flex items-center p-3 bg-white rounded-lg hover:shadow dark:bg-slate-900 hover:bg-green-500'
              >
                <div className='ml-4'>
                  <p className='mb-1 text-sm font-medium text-slate-900 dark:text-slate-300 group-hover:text-white'>
                    Vim
                    <span className='text-slate-400 group-hover:text-white'>
                      Cheatsheet
                    </span>
                  </p>
                  <p className='text-sm font-normal text-slate-400 group-hover:text-white'>
                    Cheat List
                  </p>
                </div>
              </a>
              </Link>
              <Link href='/bash' > 
              <a
                className='group flex items-center p-3 bg-white rounded-lg hover:shadow dark:bg-slate-900 hover:bg-green-500'
              >
                <div className='ml-4'>
                  <p className='mb-1 text-sm font-medium text-slate-900 dark:text-slate-300 group-hover:text-white'>
                    Bash
                    <span className='text-slate-400 group-hover:text-white'>
                      Cheatsheet
                    </span>
                  </p>
                  <p className='text-sm font-normal text-slate-400 group-hover:text-white'>
                    Cheat List
                  </p>
                </div>
              </a>
              </Link>
            </section>
          </div>
          <div className='md:w-1/2 md:pl-4'>
            <h2 className='my-6 text-xl text-slate-700 dark:text-slate-300'>
              Recent <span className='text-slate-400'>Cheatsheet</span>
            </h2>
            <section className='w-full grid grid-cols-2 gap-2 md:gap-4'>
              <Link href='/html-char'> 
              <a
                className='group flex items-center p-3 bg-white rounded-lg hover:shadow dark:bg-slate-900 hover:bg-green-500'
              >
                <div className='ml-4'>
                  <p className='mb-1 text-sm font-medium text-slate-900 dark:text-slate-300 group-hover:text-white'>
                    HTML Characters Entities{' '}
                    <span className='text-slate-400 group-hover:text-white'>
                      Cheatsheet
                    </span>
                  </p>
                  <p className='text-sm font-normal text-slate-400 group-hover:text-white'>
                    Cheat List
                  </p>
                </div>
              </a>
              </Link>
              <Link href='/'> 
              <a
                className='group flex items-center p-3 bg-white rounded-lg hover:shadow dark:bg-slate-900 hover:bg-green-500'
              >
                <div className='ml-4'>
                  <p className='mb-1 text-sm font-medium text-slate-900 dark:text-slate-300 group-hover:text-white'>
                    ISO 639-1 Language Code{' '}
                    <span className='text-slate-400 group-hover:text-white'>
                      Cheatsheet
                    </span>
                  </p>
                  <p className='text-sm font-normal text-slate-400 group-hover:text-white'>
                    Cheat List
                  </p>
                </div>
              </a>
              </Link>
              <Link href='rust' > 
              <a
                className='group flex items-center p-3 bg-white rounded-lg hover:shadow dark:bg-slate-900 hover:bg-green-500'
              >
                <div className='ml-4'>
                  <p className='mb-1 text-sm font-medium text-slate-900 dark:text-slate-300 group-hover:text-white'>
                    Rust
                    <span className='text-slate-400 group-hover:text-white'>
                      Cheatsheet
                    </span>
                  </p>
                  <p className='text-sm font-normal text-slate-400 group-hover:text-white'>
                    Cheat List
                  </p>
                </div>
              </a>
              </Link>
              <Link href='/vscode' >
              <a
                className='group flex items-center p-3 bg-white rounded-lg hover:shadow dark:bg-slate-900 hover:bg-green-500'
              >
                <div className='ml-4'>
                  <p className='mb-1 text-sm font-medium text-slate-900 dark:text-slate-300 group-hover:text-white'>
                    VSCode
                    <span className='text-slate-400 group-hover:text-white'>
                      Cheatsheet
                    </span>
                  </p>
                  <p className='text-sm font-normal text-slate-400 group-hover:text-white'>
                    Cheat List
                  </p>
                </div>
              </a>
              </Link>
            </section>
          </div>
        </div>
        <div className='hidden md:block flex-shrink-0 mx-auto  mt-8 md:mx-8 max-w-xs'>
          <Link href='/' > 
          <a
            className='flex font-medium items-center justify-center md:justify-start text-slate-800 dark:text-slate-300'
          >
            <span className='domain text-slate-600 dark:text-slate-300 text-lg md:text-2xl'>
              Cheat<span className='text-green-500'>List</span>.io
            </span>
          </a>
          </Link>
          <p className='mt-5 text-sm text-slate-500'>
            Share quick reference and cheat sheet for developers.
          </p>
          <div className='share mt-4'>
           <Link href='/hotes'><a>#Notes</a></Link>
          </div>
          <div className='share mt-8'>
            <span className='inline-flex text-slate-500 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
              <Link href='https://facebook.com/sharer/sharer.php?u=https://quickref.me'> 
              <a
                className='mr-3'
                rel='external nofollow noreferrer'
                target='_blank'
              >
                <FaFacebookF className='text-slate-900 dark:text-slate-200' />
              </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className='max-container border-b border-slate-300 dark:border-slate-700'></div>
      <div className='max-container flex flex-col sm:flex-row items-center'>
        <p className='py-2 md:py-3 text-slate-500 text-sm text-center w-full'>
          © {currYear} Cheat List, All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
