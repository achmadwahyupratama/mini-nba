import React from 'react'
import { useParams} from 'react-router-dom'
import useDetailTeam from '../hooks/useDetailTeam'

export default function TeamDetail() {
  const { teamId } = useParams()
  const [players, loading] = useDetailTeam(teamId)

  if (loading) {
    return <p>fetching data</p>
  } else {
    return (
      // <div>
      //   <p>{pemain}</p>
      // </div>
      <div className="container">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">country</th>
            </tr>
          </thead>
          <tbody>
            {
              players.map((player, i) => {
                return (
                  <tr key={player.playerId}>
                    <th scope="row">{i + 1}</th>
                    <td>{player.firstName + ' ' + player.lastName}</td>
                    <td>{player.country}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
