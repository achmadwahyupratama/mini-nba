import {SET_TEAMS, SET_FAVOURITE, SET_NEWFAVOURITE} from './actionTypes'

export function setTeams () {
  return (dispatch, getState) => {
    fetch('https://api-nba-v1.p.rapidapi.com/teams/league/standard', {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "7b23347803msh90998a16cc14991p16a77djsne36f34b34203",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        const nbaTeams = data.api.teams.filter(team => {
          return (team.nbaFranchise === '1' && team.allStar === '0')
        })
        dispatch({
          type: SET_TEAMS,
          payload: nbaTeams
        })
      })
  }
}

export function setFavourite (input) {
  return (dispatch, getState) => {
    dispatch({
      type: SET_FAVOURITE,
      payload: input
    })
  }
}

export function delFavourite (input) {
  return (dispatch, getState) => {
    let favs = [...getState().favouriteReducer.favourites]
    let newFavourites = favs.filter(fav => {
      return (fav.teamId !== input)
    })
    dispatch({
      type: SET_NEWFAVOURITE,
      payload: newFavourites
    })
  }
}