import React, { Component } from 'react'
import TableRow from './TableRow'

export default class Table extends Component {
  constructor(){
    super();
    this.state = {
      teams: []
    }
  }
  componentDidMount () {
  }

  render() {
    return (
      <div className="container">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Team</th>
              <th scope="col">Team Name</th>
              <th scope="col">City</th>
              <th scope="col">Conference</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr> */}
            {
              this.state.teams.map((team, i) => {
                return (<TableRow team={team} key={team.teamId} number={i + 1} />)
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
