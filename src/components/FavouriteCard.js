import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { delFavourite } from '../store/actionCreators'

export default function FavouriteCard(props) {
  const team = props.team
  const history = useHistory()
  const dispatch = useDispatch()
  function seeDetails (id) {
    console.log(id)
    history.push(`/teams/${id}`)
  }
  function deleteFav (id) {
    dispatch(delFavourite(id))
  }
  return (
    <div className="card shadow d-flex flex-column-reverse justify-content-around m-2 p-1" style={{"minWidth": "18rem", "maxWidth": "18rem"}}>
      <div className="p-1">
        <img src={team.logo} className="card-img-top" alt={team.nickname}/>
      </div>
      <div className="card-body">
        <h5 className="card-title">{team.fullName}</h5>
        <p className="card-text">{team.city}, {team.leagues.standard.confName} conference</p>
        <button onClick={() => seeDetails(team.teamId)} className="btn btn-dark">Details</button> | <button onClick={() => deleteFav(team.teamId)} className="btn btn-danger">Delete</button>
      </div>
    </div>
  )
}
