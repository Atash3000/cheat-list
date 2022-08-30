import React from 'react'
import Card from './Card'
import Jumbotron from './Jumbotron'

function MainContainer({posts}) {
  return (
    <section className='bg-blue dark:bg-primary w-full flex flex-coltext-center pt-14'>
      <div className='max-container lg:w-3/4'>
        <h1 className='text-4xl md:text-5xl text-white dark:text-white-dark leading-relaxed text-center'>
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


// {posts.map((post,index)=>{
//   return (
//     <Card color={post.frontMatter.background} key={index} post={post} />
//   )
// })}