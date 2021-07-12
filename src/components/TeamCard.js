import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import useDetailTeam from '../hooks/useDetailTeam'
import { useHistory } from 'react-router-dom'
import {setFavourite} from '../store/actionCreators'
import { analytics } from '../config/firebase'

function TeamCard(props) {
  const team = props.team
  const history = useHistory()
  const favourites = useSelector(state => state.favouriteReducer.favourites)
  const dispatch = useDispatch()
  function seeDetails (id) {
    analytics.logEvent(`access detail ${id}`)
    history.push(`/teams/${id}`)
  }
  function addToFavourites (team) {
    const foundTeam = favourites.find(favourite => favourite.teamId === team.teamId)
    if (!foundTeam) {
      dispatch(setFavourite(team))
    } else {
      return
    }
  }
  return (
    <div role="team-card" className="card shadow d-flex flex-column-reverse justify-content-around m-2 p-1" style={{"minWidth": "18rem", "maxWidth": "18rem"}}>
      <div className="p-1">
        <img src={team.logo} className="card-img-top" alt={team.nickname}/>
      </div>
      <div className="card-body">
        <h5 className="card-title">{team.fullName}</h5>
        <p className="card-text">{team.city}, {team.leagues.standard.confName} conference</p>
        <button onClick={() => seeDetails(team.teamId)} className="btn btn-dark">Details</button> | <button onClick={() => addToFavourites(team) /* dispatch(setFavourite(team)) */} className="btn btn-dark">Add Favourite</button>
      </div>
    </div>
  )
}

export default TeamCard


// import React, { Component } from 'react'

// export default class TeamCard extends Component {
//   seeDetails (id, event) {
//     event.preventDefault()
//     console.log("cliccked Detail", id)
//   }

//   render() {
//     const team = this.props.team
//     // const url = ""
//     return (
      // <div className="card d-flex flex-column justify-content-around" style={{"minWidth": "18rem", "maxWidth": "18rem"}}>
      //   <div>
      //     <img src={team.logo} className="card-img-top" alt={team.nickname}/>
      //   </div>
      //   <div className="card-body">
      //     <h5 className="card-title">{team.fullName}</h5>
      //     <p className="card-text">{team.city}, {team.leagues.standard.confName} conference</p>
      //     <button onClick={(e) => this.seeDetails(team.teamId, e)} className="btn btn-primary">Details</button>
      //   </div>
      // </div>
//     )
//   }
// }
