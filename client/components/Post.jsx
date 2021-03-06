import React from 'react'

const Post = ({title, date, summary, text}) => {
  let thisPostDate = (new Date((date*1000)).toString())
  let thisSummary = ((summary.toString()).replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))
  return (
  <div>
    
    <h4>{title}</h4>
    <p>{thisPostDate}</p>
    <pre>{summary}</pre>
  </div>
  )
}

export default Post
