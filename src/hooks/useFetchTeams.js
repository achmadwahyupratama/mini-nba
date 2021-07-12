import { useEffect, useState } from 'react'

export default function useFetchTeams() {
  const [isLoading, setIsLoading] = useState(false)
  const [teams, setTeams] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    setIsLoading(true)
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
        setTeams(nbaTeams)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])
  return [isLoading, teams, error]
}
