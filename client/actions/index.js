import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const SYN = 'SYN'


export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const getSyn = (word) => {
  return {
    type: SYN,
    word:word
    }
}

export const receiveSyn = (words) => {
  return {
    type: RECEIVE_SYN,
    errorMessage: errorMessage
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function getSynonym (word) {
  return (dispatch) => {
    dispatch(getSyn())
    return request
      .get(`api.datamuse.com/words?rel_trg=${word}`)
      .then(res => {
        dispatch(receiveSyn(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}