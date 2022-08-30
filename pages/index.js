import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import React, { useEffect, useState } from 'react';
import matter from 'gray-matter';
import Link from 'next/link'
import Card from '../components/Card';
import MainContainer from '../components/MainContainer';



export default function Home({posts}) {
  
  if(!posts){
    return <h1>...continue</h1>
  }
  return (
      <MainContainer posts={posts} />
  )
}

export async function getStaticProps() {
  // get files from markdown
  const files = fs.readdirSync(path.join('markdown'));
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('markdown', filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      slug,
      frontMatter,
    };
  });
  return {
    props: { posts },
  };
};


