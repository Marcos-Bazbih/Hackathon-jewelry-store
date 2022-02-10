import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="  SideBar">
      <nav className="SideLinks">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/rings">
          Rings
        </Link>
        <Link className="link" to="/earrings">
          Earrings
        </Link>
        <Link className="link" to="/watches">
          Watches
        </Link>
        <Link className="link" to="/necklaces">
          Necklaces
        </Link>
        <Link className="link" to="/cart">
          Cart
        </Link>
      </nav>
    </div>
  );
};
export default SideBar;
