import {RECEIVE_SYN} from '../actions'

function synonymise (state = [], action) {
  switch (action.type) {
    case RECEIVE_SYN:
      console.log(action.word)
      return action.word

    default:
      return state
  }
}

export default synonymise
