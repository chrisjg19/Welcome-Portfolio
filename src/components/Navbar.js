import React, { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [click] = useState(false);


  const [color] = useState(false);


  return (
    <div className={color ? "header header-bg" : "header"}>
      
        <h1>Christopher Gonzalez</h1>
       <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
   
    </div>
  );
};

export default Navbar;
