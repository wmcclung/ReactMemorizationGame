import React from "react";
import './navbarcss.css';

const Navbar = (props) => (

  <nav className="navbar navbar-dark bg-dark">
    
    <span className="navbar-brand mb-0 h1 text-warning font-weight-bold" >MK2 Memorization</span>
    <span className="text-center text-warning font-weight-bold mb-0 h3">{props.message}</span>
    <span className="navbar-text text-warning font-weight-bold" >
      Wins: <span>{props.correct}</span>&nbsp;
      Top Score: <span>{props.topscore}</span>
    </span>
  </nav>
)
export default Navbar;