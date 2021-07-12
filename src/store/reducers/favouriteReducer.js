import { SET_FAVOURITE, SET_NEWFAVOURITE } from '../actionTypes'

const initialState = {
  favourites: []
}

function favouriteReducer (state = initialState, action) {
  switch (action.type) {
    case SET_FAVOURITE:
      return {...state, favourites: [...state.favourites, action.payload] }
    case SET_NEWFAVOURITE:
      return {...state, favourites: action.payload }
    default:
      return state
  }
}

export default favouriteReducer
