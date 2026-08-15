import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        "https://www.omdbapi.com/?i=${id}&apikey=8d9a5352",
      );

      const data = await response.json();
      setMovies(data.Search || []);
    }

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1>Movies</h1>
        <div className="movies__header">
          <input
            className="search"
            type="text"
            placeholder="Search movies..."
          />

          <select id="filter">
            <option value="">Sort by</option>
            <option value="A_TO_Z">A-Z</option>
            <option value="Z_TO_A">Z-A</option>
          </select>
        </div>

        <div className="movies">
          {movies.map((movie) => (
            <div className="movie" key={movie.imdbID}>
              <figure className="movie__img--wrapper">
                <img
                  className="movie__img"
                  src={movie.Poster}
                  alt={movie.Title}
                />
              </figure>
              <div className="movie__title">{movie.Title}</div>
              <div className="movie__price">{movie.Year}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
