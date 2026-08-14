import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/movies-logo.png";
import "../styles/App.css";
import Nav from "./Nav";
import Footer from "./ui/Footer";

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



function searchMovies() {
  const searchValue = document.querySelector(".search").value;
  fetchMovies(searchValue);
}

async function fetchMovies(query = "fast") {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${query}&apikey=8d9a5352`,
  );
  const moviesData = await response.json();
  const movies = moviesData.Search;
  const moviesWrapper = document.querySelector(".movies");
  moviesWrapper.innerHTML = movies
    .map((movie) => {
      return `
        <div class="movie">
            <figure class="movie__img--wrapper">
                <img class="movie__img" src="${movie.Poster}" alt="${movie.Title}">
            </figure>
            <div class="movie__title">${movie.Title}</div>
            <div class="movie__price">${movie.Year}</div>
        </div>
        `;
    })
    .join("");
}
fetchMovies();

function filtermovies() {
  const filterValue = document.querySelector("#filter").value;
  const moviesWrapper = document.querySelector(".movies");
  const movies = Array.from(moviesWrapper.querySelectorAll(".movie"));

  movies.sort((a, b) => {
    const titleA = a.querySelector(".movie__title").textContent;
    const titleB = b.querySelector(".movie__title").textContent;
    if (filterValue === "ALPHABETICALLY_A-Z") {
      return titleA.localeCompare(titleB);
    } else {
      return titleB.localeCompare(titleA);
    }
  });

  movies.forEach((movie) => moviesWrapper.appendChild(movie));
}
