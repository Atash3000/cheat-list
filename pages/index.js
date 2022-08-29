import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import React, { useEffect, useState } from 'react';
import matter from 'gray-matter';
import Link from 'next/link'

export default function Home(props) {
  const {posts} = props;
  return (
    <div>
      {posts.map(post=>{
        const {frontMatter:{title},slug} = post
        return (
         <>
          <Link href={`/${slug}`} key={title} >{title}</Link>
         </>
        )
      })}
    </div>
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


