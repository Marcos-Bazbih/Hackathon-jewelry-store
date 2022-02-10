import React from "react";
import "./SideBar.css"
import {  Link } from "react-router-dom";
 const SideBar=()=> {
    return (
      <div className="  SideBar">
       <nav className="SideLinks"><button><Link to="/">Home</Link></button>
      <button><Link to="/Rings">Rings</Link></button>
      <button><Link to="/Earrings">Earrings</Link></button>
      <button><Link to="/Watches">Watches</Link></button>
      <button><Link to="/Necklaces">Necklaces</Link></button>
      </nav>
      </div>
    );
  }
  export default SideBar;