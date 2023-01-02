import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar bg-warning navbar-expand-sm navbar-expand-lg navbar-${props.mode}bg-${props.mode}`}>
  <div className="container-fluid">
  <a className="navbar-brand" href='/'> {props.title}</a>
<div className='collapse navbar-collapse' id='navbarSupportedContent' >
  <ul className='navbar-nav me-auto mb-2 m'>
   <li className='nav-item'>
    <a className='nav-link active' aria-current='page'  href="/TextForm">Home</a>
    </li>
    {/* <li className='nav-item'>
    <Link className='nav-link active' to="/About">{props.aboutText}</Link>
    </li> */}
  </ul>

  {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form> */}

    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable DarkMode</label>
</div>
</div>

  </div>
</nav>
  )
}
Navbar.protoTypes ={
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};