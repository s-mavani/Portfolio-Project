import React from 'react'
import logo from "../logo.jpg"
//FONTAWESOME
// import {FontAwesome} from "react-fontawesome";
// import {faBars} from "react-fontawesome";


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="flase" aria-label="Toggle navigation">
      {/* <FontAwesome icon={faBars} style={{color: "#fff"}}/> */}
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT ME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">EXPERIENCE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT</a>
        </li>
      </ul>
      
    </div>
  </div>
  </div>
</nav>
    )
}

export default Navbar
