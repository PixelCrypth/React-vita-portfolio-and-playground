// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Counter from "./components/Counters";
import Buttons from "./components/Buttons";
import StickyNotes from "./components/StickyNotes";
import AboutMe from "./components/AboutMe";
import ApiTesting from "./components/ApiTesting";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="header">
        <h1>Code Playground</h1>
      </div>

      <div className="main-content">
        <div className="left-content">
          <div className="intro-div">
            <p>
              This is a simple page where I test out different features and
              functionalities.
              <br />
              Feel free to click on the buttons in the navigation bar to see the
              different tests I have set up.
              <br />
              Or if you want to know more about me, click on the About me button
              in the navigation bar.
              <br /> <br />
              <strong style={{ textDecoration: 'underline' }}>Small todo list for myself:</strong>
              <br />
              make the pages responsive. As this work only on desktop, for now.
              <br />
              and change hosting on vite.config.js. Currently host on localnetwork hosted.
            </p>
          </div>

          <nav className="navbar">
            <ul>
              <li>
                <Link to="/buttons">Buttons</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/sticky-notes">Sticky notes</Link>
              </li>
              <li>
                <Link to="/about-me">About me</Link>
              </li>
              <li>
                <Link to="/api-testing">Api testing</Link>
              </li>
            </ul>
          </nav>

          <div className="content">
            <Routes>
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/sticky-notes" element={<StickyNotes />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/api-testing" element={<ApiTesting />} />
            </Routes>
          </div>
        </div>

        <div className="sidebar"></div>
      </div>

      <div className="About-me-div" style={{ textAlign: "center" }}>
        Footer
      </div>
    </Router>
  );
}

export default App;
