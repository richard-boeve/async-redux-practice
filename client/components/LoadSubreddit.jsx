import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'


const LoadSubreddit = ({dispatch}) =>   {
  return (
  <React.Fragment>
  <form onSubmit={ (e) => {
          e.preventDefault()
          dispatch(fetchPosts(document.getElementById('search').value))
        } }>
    <input id='search' type='text'></input>

    <button type='submit'>
      Fetch Posts
    </button>
  </form>
  </React.Fragment>
  )}

export default connect()(LoadSubreddit)
