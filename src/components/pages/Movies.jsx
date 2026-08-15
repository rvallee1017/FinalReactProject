import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("fast");
  const [sort, setSort] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${search}&apikey=8d9a5352`,
      );

      const data = await response.json();
      setMovies(data.Search || []);
    }

    function sortMovies(event) {
      const sortValue = event.target.value;
      const sortedMovies = [...movies];

      if (sortValue === "A_TO_Z") {
        sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
      }

      if (sortValue === "Z_TO_A") {
        sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
      }

      setMovies(sortedMovies);
    }

    fetchMovies();
  }, [search]);

  return (
    <div className="container">
      <div className="row">
        <h1>Movies</h1>
        <div className="movies__header">
          <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <select id="filter" onChange={sortMovies}>
            <option value="">Sort by</option>
            <option value="A_TO_Z">A-Z</option>
            <option value="Z_TO_A">Z-A</option>
          </select>
        </div>

        <div className="movies">
          {movies.map((movie) => (
            <div className="movie" key={movie.imdbID}>
              <figure className="movie__img--wrapper">
                <Link to={`/movies/${movie.imdbID}`}>
                  <img
                    className="movie__img"
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                </Link>
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
