import React, { Component } from 'react'

export default class TableRow extends Component {
  render() {
    const {number, team} = this.props
    return (
      <tr>
        <th scope="row">{number}</th>
        <td>{team.nickname}</td>
        <td>{team.fullName}</td>
        <td>{team.city}</td>
        <td>{team.leagues.standard.confName}</td>
      </tr>
    )
  }
}
