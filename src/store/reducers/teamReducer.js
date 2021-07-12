import { SET_TEAMS } from '../actionTypes'

const initialState = {
  teams: []
}

function teamReducer (state = initialState, action) {
  switch (action.type) {
    case SET_TEAMS:
      return {...state, teams: action.payload }
    default:
      return state
  }
}

export default teamReducer