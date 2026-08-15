import React from "react";
import "./index.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/ui/Footer";
import Home from "./components/pages/Home.jsx";
import Movies from "./components/pages/Movies.jsx";
import { Routes, Route } from "react-router-dom";
import MovieInfo from "./components/ui/MovieInfo.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInfo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
