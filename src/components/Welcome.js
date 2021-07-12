import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className="container-fluid py-5">
      <div className="jumbotron jumbotron-fluid d-flex flex-column justify-content-center align-items-end rounded">
        <div className="container">
          <h1 className="display-4">Unofficial NBA</h1>
          <p className="lead">Unofficial site for NBA teams and their players data.</p>
          <Link role="home-button" className="btn shadow link-button" to="/">Home</Link>
          <Link role="favourite-button" className="btn shadow link-button" to="/favourites">Favourites</Link>
        </div>
      </div>
    </div>
  )
}

// import React from 'react'

// class Welcome extends React.Component {
//   render () {
//     return (
//       <>
//         <h1>Unofficial NBA</h1>
//       </>
//     )
//   }
// }

// export default Welcome