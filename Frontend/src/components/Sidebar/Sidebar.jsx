import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaClipboardList,
  FaRocket,
  FaChartLine,
  FaBug,
  FaCalendarCheck,
  FaRoad,
  FaRetweet,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    document.body.style.setProperty(
      "--sidebar-width",
      isExpanded ? "240px" : "70px"
    );
  }, [isExpanded]);

  const sidebarItems = [
    {
      icon: <FaClipboardList />,
      name: "Team Planning",
      link: "/team-planning",
    },
    { icon: <FaRocket />, name: "Feature Release", link: "/feature-release" },
    { icon: <FaChartLine />, name: "Kanban Board", link: "/kanban" },
    { icon: <FaBug />, name: "Bug Tracker", link: "/bug-tracker" },
    {
      icon: <FaCalendarCheck />,
      name: "Sprint Planning",
      link: "/sprint-planning",
    },
    { icon: <FaRocket />, name: "Product Launch", link: "/product-launch" },
    { icon: <FaRoad />, name: "Roadmap", link: "/roadmap" },
    { icon: <FaRetweet />, name: "Team Retrospective", link: "/retrospective" },
  ];

  return (
    <nav className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="sidebar-header">
        <button onClick={toggleSidebar} className="menu-button">
          <FaBars />
        </button>
      </div>
      <ul className="sidebar-list">
        {sidebarItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            <NavLink
              to={item.link}
              className="sidebar-link"
              activeClassName="active-link"
            >
              <span className="icon">{item.icon}</span>
              {isExpanded && <span className="label">{item.name}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
