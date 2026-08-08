import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Talk from "./pages/Talk";

function Navbar({ darkMode, setDarkMode }) {

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <span>#</span>ABtalks
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/explore">
          Explore
        </Link>

        <a href="/#about">
          About
        </a>

      </div>

      <div className="nav-actions">

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-btn"
        >
          {darkMode ? "☀" : "☾"}
        </button>

        <button className="profile-btn">
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

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/explore"
            element={<Explore />}
          />

          <Route
            path="/talk/:id"
            element={<Talk />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;