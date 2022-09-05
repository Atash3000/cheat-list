import React, { useContext} from 'react'
import ReactMarkdown from 'react-markdown'
import Jumbotron from './Jumbotron'
import rehypeRaw from 'rehype-raw'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
    dracula,
    nord,
  } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {context} from '../context/MainContext';






function ContentPage(props) {
    const {frontMatter:{title,data,background,intro},slug,content} = props.info;
    const {value} = useContext(context)
    const codeTheme = value ? dracula :nord

  return (
    <div className='mx-auto flex flex-wrap md:py-5 flex-col md:flex-row items-center'>
        <Jumbotron title={title} intro={intro} />
        <ReactMarkdown
        className='mdLayout w-full max-container text-slate-900 dark:text-slate-300'
        rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                customStyle={{
                  backgroundColor:"transparent",
             
              }}
                  style={codeTheme} 
                  language={match[1]}
                  showInlineLineNumbers
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code>{children}</code>
              );
            },
          }}
        >{content}
        </ReactMarkdown>
  </div>
  )
}

export default ContentPage



