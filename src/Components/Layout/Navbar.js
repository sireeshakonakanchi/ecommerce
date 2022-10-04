import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top " id='fixed'>
  <div className="container">
    <Link className="navbar-brand" to='/'>Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/mobiles">MOBILE
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
<li className="nav-item">
        <Link className="nav-link active" to="/laptop">LAPTOP
            <span className="visually-hidden">(current)</span>
          </Link>
       </li>
       <li className="nav-item">
    <Link className="nav-link active" to="/tvs">TV'S
          </Link>
        </li>

         </ul>
         <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
    </div>
  </div>
  </nav> 
  </div>
  )
}
