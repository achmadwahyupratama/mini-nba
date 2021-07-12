import React from 'react'
import { useSelector } from 'react-redux'
import FavouriteCard from './FavouriteCard'

export default function Favourites() {
  const favourites = useSelector(state => state.favouriteReducer.favourites)
  return (
    <div className="container d-flex flex-column justify-content-around">
      <h1>Your Favourites</h1>
      <div className="container d-flex flex-wrap">
        {
          favourites.map(team => {
            return (<FavouriteCard team={team} key={team.teamId}/>)
          })
        }
      </div>
    </div>
  )
}
