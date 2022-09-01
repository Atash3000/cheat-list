import Link from 'next/link';
import React,{useContext} from 'react';
import {context} from '../context/MainContext';

function Card({ post}) {
  const {icons} = useContext(context);
  const {
    frontMatter: { title, background },
    slug,
  } = post;

  let Icon = icons[slug]

  return (
    <Link href={`/${slug}`}>
      <div style={{ background: background }} className={`card hover:opacity-80`}>
       <Icon className='text-white dark:text-white-dark text-xl sm:text-2xl md:text-3xl' />
        <p className='text-white dark:text-white-dark text-base'>{title}</p>
      </div>
    </Link>
  );
}

export default Card;


