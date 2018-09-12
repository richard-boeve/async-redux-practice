import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import Synonymise from './Synonymise'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit />
    <Synonymise />
    <WaitIndicator />
    <SubredditList />
  </div>
)

export default App
