import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import synonymise from './synonymise'


export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  synonymise
})
