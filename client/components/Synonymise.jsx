import React from 'react'
import {connect} from 'react-redux'
import {getSyn} from '../actions'


const Synonymise = ({dispatch}) =>   {
  return (
  <React.Fragment>
  <form onSubmit={ (e) => {
          e.preventDefault()
          dispatch(getSyn(document.getElementById('wordToSyn').value))
        } }>
    <input id='wordToSyn' type='text'></input>

    <button type='submit'>
      Synonymise
    </button>
  </form>
  </React.Fragment>
  )}

export default connect()(Synonymise)
