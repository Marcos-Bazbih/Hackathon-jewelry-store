import React from "react";
import "./SideBar.css"
import {  Link } from "react-router-dom";

 const SideBar=()=> {
    return (
      <div className="  SideBar">
       <nav className="SideLinks"><button><Link to="/">Home</Link></button>
      <button><Link to="/rings">Rings</Link></button>
      <button><Link to="/earrings">Earrings</Link></button>
      <button><Link to="/watches">Watches</Link></button>
      <button><Link to="/necklaces">Necklaces</Link></button>
      <button><Link to="/cart">Cart</Link></button>
      </nav>
      </div>
    );
  }
  export default SideBar;