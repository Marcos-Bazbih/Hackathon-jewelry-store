import React from "react";
import "./SideBar.css"
import {  Link } from "react-router-dom";
 const SideBar=()=> {
    return (
      <div className="  SideBar">
       <nav><button><Link to="/">Home</Link></button>
      <button><Link to="/">Order</Link></button>
      <button><Link to="/">Menu</Link></button>
      </nav>
      </div>
    );
  }
  export default SideBar;