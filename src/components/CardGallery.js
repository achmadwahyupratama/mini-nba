import React, { useEffect /* , useState */ } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTeams/* , setError, setLoading */ } from '../store/actionCreators'
import TeamCard from './TeamCard'
import loadingPic from '../images/loading.gif'
import firebase from 'firebase'
// import { analytics } from 'firebase/analytics'
// import useFetchTeams from '../hooks/useFetchTeams'

export default function CardGallery() {
  // eslint-disable-next-line
  // const [isLoading, teams, error] = useFetchTeams()
  // const [teams, setTeams] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(null)



  const teams = useSelector(state => state.teamReducer.teams)
  // const loading = useSelector(state => state.miscReducer.loading)
  // const error = useSelector(state => state.miscReducer.error)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(firebase);
    dispatch(setTeams())
    // console.log(teams);
    // fetch('https://api-nba-v1.p.rapidapi.com/teams/league/standard', {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-key": "7b23347803msh90998a16cc14991p16a77djsne36f34b34203",
    //     "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
    //   }
    // })
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
    //     const nbaTeams = data.api.teams.filter(team => {
    //       return (team.nbaFranchise === '1' && team.allStar === '0')
    //     })
    //     dispatch(setTeams(nbaTeams))
    //   })
    //   .catch(err => {
    //     dispatch(setError(err))
    //   })
    //   .finally(() => {
    //     dispatch(setLoading(false))
    //   })
  }, [])




  // useEffect(() => {
  //   setTeams(
  //     [
  //       {
  //           "city": "Atlanta",
  //           "fullName": "Atlanta Hawks",
  //           "teamId": "1",
  //           "nickname": "Hawks",
  //           "logo": "https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png",
  //           "shortName": "ATL",
  //           "allStar": "0",
  //           "nbaFranchise": "1",
  //           "leagues": {
  //               "standard": {
  //                   "confName": "East",
  //                   "divName": "Southeast"
  //               }
  //           }
  //       },
  //       {
  //           "city": "Boston",
  //           "fullName": "Boston Celtics",
  //           "teamId": "2",
  //           "nickname": "Celtics",
  //           "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png",
  //           "shortName": "BOS",
  //           "allStar": "0",
  //           "nbaFranchise": "1",
  //           "leagues": {
  //               "standard": {
  //                   "confName": "East",
  //                   "divName": "Atlantic"
  //               }
  //           }
  //       }
  //     ]
  //   )
  // }, [])

  return (
    <div role="card-gallery" className="container d-flex flex-row justify-content-center flex-wrap">
      {
        !teams.length ? <img className="align-self-center loading-pic" src={loadingPic} alt="now loading"/> : (
        teams.map(team => {
          return (<TeamCard team={team} key={team.teamId}/>)
        }))
      }
    </div>
  )
}
