import React, { useState } from "react";
import "./Navbar.css";
import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const toggleProfileMenu = () => setProfileMenuOpen(!isProfileMenuOpen);

  const handleLogin = () => {
    setIsLoggedIn(true); // Simulate a login action
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Simulate logout action
    setProfileMenuOpen(false); // Close profile menu on logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <span className="logo-text">SyncOps</span>
        </div>
        <div className="navbar-menu">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/tasks" className="nav-link">
            Tasks
          </Link>
          <Link to="/analytics" className="nav-link">
            Analytics
          </Link>
          <Link to="/resources" className="nav-link">
            Resources
          </Link>
        </div>
        <div className="navbar-actions">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button className="search-button">
              <svg
                className="search-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <div className="profile-menu">
            {isLoggedIn ? (
              <button className="profile-button" onClick={toggleProfileMenu}>
                <span className="profile-name">Akash</span>
                <svg
                  className="chevron-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            ) : (
              <button className="login-button" onClick={handleLogin}>
                Login
              </button>
            )}
            {isProfileMenuOpen && isLoggedIn && (
              <div className="profile-dropdown">
                <a href="#profile" className="dropdown-item">
                  Profile
                </a>
                <a href="#settings" className="dropdown-item">
                  Settings
                </a>
                <a href="#help" className="dropdown-item">
                  Help & Support
                </a>
                <div className="dropdown-divider"></div>
                <a href="#signout" className="dropdown-item">
                  Sign Out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
