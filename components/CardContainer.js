import React from 'react'
import Card from './Card';

function CardContainer({posts}) {
  
  return (
    <section className='max-container'>
        <div className="w-full lg:w-2/3 flex flex-col mx-auto justify-center mt-10">
            <section className='w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
                {posts.map((post,index)=><Card key={index} post={post} />)}
            </section>
            <div className='mt-6'></div>
        </div>
    </section>
  )
}

export default CardContainer

