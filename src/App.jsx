import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Talk from "./pages/Talk";
import Dashboard from "./pages/Dashboard";
import Day from "./pages/Day";


function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo">
        <span>#</span>ABtalks
      </Link>


      {/* Navigation */}
      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/explore">
          Explore
        </Link>

        <a href="/#about">
          About
        </a>

      </div>


      {/* Actions */}
      <div className="nav-actions">

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-btn"
          aria-label="Toggle theme"
        >
          {darkMode ? "☀" : "☾"}
        </button>

        <button
          className="profile-btn"
          aria-label="Profile"
        >
          A
        </button>

      </div>

    </nav>
  );
}


function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>

      <div className={darkMode ? "app dark" : "app"}>

        {/* Navbar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />


        {/* Routes */}
        <Routes>

          {/* Landing Page */}
          <Route
            path="/"
            element={<Home />}
          />


          {/* Student Dashboard */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />


          {/* Explore */}
          <Route
            path="/explore"
            element={<Explore />}
          />


          {/* AI Talk */}
          <Route
            path="/talk/:id"
            element={<Talk />}
          />


          {/* Challenge Day */}
          <Route
            path="/day/:id"
            element={<Day />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}


export default App;