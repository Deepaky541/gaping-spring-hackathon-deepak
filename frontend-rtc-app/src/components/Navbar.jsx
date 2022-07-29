import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import logo from "./pic/Logo.mp4"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
        <video autoPlay muted>
          <source src={logo} type="video/mp4" />
        </video></Link>
      </div>
      <div className="right">
        <Link to="/">
          <h6>Home</h6>
        </Link>
        <Link to="/video">
          <h6>Video</h6>
        </Link>
        <Link to="/msg">
          <h6>message</h6>
        </Link>
      </div>
    </div>
  );
}

export default Navbar