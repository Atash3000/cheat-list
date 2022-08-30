import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

function Card({color,post}) {
    const {frontMatter:{title,background,image},slug} = post
    
  return (
    <>
      <Link  href={`/${slug}`}>
      <div style={{background:background}} className={`card`}>
           <p className='text-white-light'>{title}</p>
           <Image src={image} height='50' width='50' alt={title} />
        </div>
      </Link>
    </>
  );
}

export default Card;
