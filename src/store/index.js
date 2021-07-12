import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { 
//   SET_TEAMS, SET_ERROR, SET_LOADING, SET_FAVOURITE
//  } from './actionTypes'
import ReduxThunk from 'redux-thunk'
import teamReducer from './reducers/teamReducer'
import favouriteReducer from './reducers/favouriteReducer'

const reducer = combineReducers({
  teamReducer,favouriteReducer
})

const middlewares = applyMiddleware(ReduxThunk)

const store = createStore(reducer, middlewares)
export default store


// const initialState = {
//   teams: [],
//   favourites: [],
//   loading: false,
//   error: null
// }

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_LOADING:
//       return {...state, loading: action.payload }
//     case SET_ERROR:
//       return {...state, error: action.payload }
//     case SET_TEAMS:
//       return {...state, teams: action.payload }
//     case SET_FAVOURITE:
//       return {...state, favourites: [...state.favourites, action.payload] }
//     default:
//       return state
//   }
// }
