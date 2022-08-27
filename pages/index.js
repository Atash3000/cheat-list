import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import React, { useEffect, useState } from 'react';
import matter from 'gray-matter';
import Post from '../components/Post';

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div>
      {posts.map((post, index) => {
        return <h1 key={index}>HELLO </h1>;
      })}
    </div>
  );
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
}
