import React from 'react';
import {FaFacebookF} from 'react-icons/fa'

function Footer() {
  return (
    <footer className='text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 md:mt-14'>
      <div className='max-container mb-8 md:py-10 mx-auto flex md:items-center lg:items-start md:flex-row flex-col'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:flex-grow md:flex -mb-10 md:mt-0 mt-10'>
          <div className='md:w-1/2 md:pr-4'>
            <h2 className='my-6 text-xl text-slate-700 dark:text-slate-300'>
              Top <span className='text-slate-400'>Cheatsheet</span>
            </h2>
            <section className='w-full grid grid-cols-2 gap-2 md:gap-4'>
              <a
                href='/python'
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
              <a
                href='/javascript'
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
              <a
                href='/vim'
                className='group flex items-center p-3 bg-white rounded-lg hover:shadow dark:bg-slate-900 hover:bg-green-500'
              >
                <div className='ml-4'>
                  <p className='mb-1 text-sm font-medium text-slate-900 dark:text-slate-300 group-hover:text-white'>
                    Vim{' '}
                    <span className='text-slate-400 group-hover:text-white'>
                      Cheatsheet
                    </span>
                  </p>
                  <p className='text-sm font-normal text-slate-400 group-hover:text-white'>
                    Cheat List
                  </p>
                </div>
              </a>
              <a
                href='/bash'
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
            </section>
          </div>
          <div className='md:w-1/2 md:pl-4'>
            <h2 className='my-6 text-xl text-slate-700 dark:text-slate-300'>
              Recent <span className='text-slate-400'>Cheatsheet</span>
            </h2>
            <section className='w-full grid grid-cols-2 gap-2 md:gap-4'>
              <a
                href='/html-char'
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
              <a
                href='/iso-639-1'
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
              <a
                href='/rust'
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
              <a
                href='/vscode'
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
            </section>
          </div>
        </div>
        <div className='hidden md:block flex-shrink-0 mx-auto  mt-8 md:mx-8 max-w-xs'>
          <a
            href='/'
            className='flex font-medium items-center justify-center md:justify-start text-slate-800 dark:text-slate-300'
          >
            <span className='domain text-slate-600 dark:text-slate-300 text-lg md:text-2xl'>
              Cheat<span className='text-green-500'>List</span>.io
            </span>
          </a>
          <p className='mt-5 text-sm text-slate-500'>
            Share quick reference and cheat sheet for developers.
          </p>
          <div className='share mt-4'>
            <a href='/notes'>#Notes</a>
          </div>
          <div className='share mt-8'>
            <span className='inline-flex text-slate-500 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
              <a
                className='mr-3'
                href='https://facebook.com/sharer/sharer.php?u=https://quickref.me'
                rel='external nofollow noreferrer'
                target='_blank'
              >
                <FaFacebookF className='text-slate-900 dark:text-slate-200' />
              </a>
              <a
                className='mx-3'
                href='https://twitter.com/intent/tweet/?text=Share%20quick%20reference%20and%20cheat%20sheet%20for%20developers&amp;url=https://quickref.me'
                rel='external nofollow noreferrer'
                target='_blank'
              >
                <i className='icon text-xl icon-twitter'></i>
              </a>
              <a
                className='mx-3'
                href='https://reddit.com/submit/?url=https://quickref.me&amp;resubmit=true&amp;title=Share%20quick%20reference%20and%20cheat%20sheet%20for%20developers'
                rel='external nofollow noreferrer'
                target='_blank'
              >
                <i className='icon text-xl icon-reddit'></i>
              </a>
              <a
                className='mx-3'
                href='https://pinterest.com/pin/create/button/?url=https://quickref.me&amp;description=Share%20quick%20reference%20and%20cheat%20sheet%20for%20developers'
                rel='external nofollow noreferrer'
                target='_blank'
              >
                <i className='icon text-xl icon-pinterest'></i>
              </a>
              <a
                className='ml-3'
                href='https://www.linkedin.com/shareArticle?url=https://quickref.me&amp;title=QuickRef.ME%20-%20Quick%20Reference%20Cheat%20Sheet&amp;summary=Share%20quick%20reference%20and%20cheat%20sheet%20for%20developers'
                rel='external nofollow noreferrer'
                target='_blank'
              >
                <i className='icon text-xl icon-linkedin'></i>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className='max-container border-b border-slate-300 dark:border-slate-700'></div>
      <div className='max-container flex flex-col sm:flex-row items-center'>
        <p className='py-2 md:py-3 text-slate-500 text-sm text-center w-full'>
          © 2022 QuickRef.ME, All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
