import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/movies-logo.png";
import "./index.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/ui/Footer";
import Home from "./components/pages/Home.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <div className="container">
          <div className="row row__column">
            <h1>Welcome to the Movie Library</h1>
            <p>
              Explore a wide range of movies and find your next favorite film.
            </p>
            <Link to="/movies">
              <button className="btn">Explore Movies</button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
