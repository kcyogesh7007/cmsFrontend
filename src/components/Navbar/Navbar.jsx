import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <span>My Blog</span>
        </div>

        <button className="create-btn">Create</button>
      </nav>
    </div>
  );
};

export default Navbar;
