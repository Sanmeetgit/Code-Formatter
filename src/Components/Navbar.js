import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="navbar bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">

            <img src={require('../title-logo.png')} alt="Code Formatter Logo" width="35" height="24" className="d-inline-block align-text-top mx-2" />
            {props.title}
            </a>
        </div>
    </nav>
  )
}
