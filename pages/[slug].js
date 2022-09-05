import React from 'react'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import ContentPage from '../components/ContentPage';

function PostPage(props) {
  // const {frontMatter:{title,data,cover_image,background},slug,content} = props
  return (
    <ContentPage info={props} /> 
  )
}

export default PostPage;

export async function getStaticProps({params:{slug}}) {
    const markdownWithMeta = fs.readFileSync(path.join('markdown',slug+'.md'),'utf-8');
    const {data:frontMatter,content} = matter(markdownWithMeta)
    return {
      props:{
          frontMatter,
          slug,
          content
      }
    };
  };
  

export async function getStaticPaths() {

    const files = fs.readdirSync(path.join('markdown'));
    const paths = files.map(fileName=>{
        fileName = fileName.toLowerCase().replace('.md','')
        return {
            params:{slug:fileName}
        }
    })
   // console.log(paths)
    return {
      paths:paths,
      fallback: false, // returns 404 page if route doest exist
    }
  }