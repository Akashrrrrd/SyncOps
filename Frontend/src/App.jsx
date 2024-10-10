import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Projects/Projects";
import './App.css';
import Tasks from "./pages/Tasks/Tasks";
import Analytics from "./pages/Analytics/Analytics";
import Resources from "./pages/Resources/Resources";

const App = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="app-container">
          <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
          <div className={`main-content ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tasks" element={<Tasks/>}/>
              <Route path="/analytics" element={<Analytics/>}/>
              <Route path="/resources" element={<Resources/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;