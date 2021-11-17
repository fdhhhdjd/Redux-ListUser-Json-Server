import React, { useState } from "react";
import "../Styles/Header.css";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <>
      <div className="header">
        <Link to="/">
          <p className="logo">User Management</p>
        </Link>
        <div className="header-right">
          <Link to="/">
            <p
              className={`${activeTab === "Home" ? "active" : ""}`}
              onClick={() => setActiveTab("Home")}
            >
              Home
            </p>
          </Link>
          <Link to="/addUser">
            <p
              className={`${activeTab === "AddContact" ? "active" : ""}`}
              onClick={() => setActiveTab("AddContact")}
            >
              Add Contact
            </p>
          </Link>
          <Link to="/about">
            <p
              className={`${activeTab === "About" ? "active" : ""}`}
              onClick={() => setActiveTab("About")}
            >
              About
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
