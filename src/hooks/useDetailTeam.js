import {useState, useEffect} from 'react'

export default function useDetailTeam (id) {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    setLoading(true)
    fetch('https://api-nba-v1.p.rapidapi.com/players/teamId/' + id, {
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
        setPlayers(data.api.players)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
      // eslint-disable-next-line
  }, [id])
  return [players, loading, error]
}