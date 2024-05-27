import { Link ,NavLink } from "react-router-dom";
import "../css/main.css";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa"
    /* import "https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"; */
function Navbar() {
    return (
        <nav>
           <NavLink to="/"><div/></NavLink>
            <ul>
               
                <li><NavLink to="/projet">Projets</NavLink></li>
                
            </ul>
        </nav> 

      
    );
}

export default Navbar;