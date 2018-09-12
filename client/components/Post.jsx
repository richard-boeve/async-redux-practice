import React from 'react'

const Post = ({title, date, summary}) => {
  let thisPostDate = (new Date((date*1000)).toString())
  // let thisSummary = (window.atob(summary))
  return (
  <div>
    
    <h4>{title}</h4>
    <p>{thisPostDate}</p>
    <p>{summary}</p>
  </div>
  )
}

export default Post
