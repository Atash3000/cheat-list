import React from 'react'
import remarkFrontmatter from 'remark-frontmatter'
import Image from 'next/image'

function Post({post}) {

  return (
      <> 
    <h1>{post.frontMatter.title}</h1>
    {/* <Image src={post.frontMatter.icon} height={200} width={200} alt={post.frontMatter.title}  /> */}
    </>
  )
}

export default Post