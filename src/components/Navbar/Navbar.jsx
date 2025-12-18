import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <span onClick={() => navigate("/")}>My Blog</span>
        </div>

        <button onClick={() => navigate("/create")} className="create-btn">
          Create
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
