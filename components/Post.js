import React from 'react'

function Post(props) {
    const {post} = props;
    const {title,intro,background} = post;
    console.log(background,'bg')
    const k = 'lang-py'
  return (
    <div className={`bg-${k}`}>
        <h1>{title}</h1>
        <p>{intro}</p>
    </div>
  )
}

export default Post