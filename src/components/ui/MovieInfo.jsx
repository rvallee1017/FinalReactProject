import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=8d9a5352`,
      );
      const data = await response.json();
      setMovie(data);
    }
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-info">
      <img
        className="movie-info__poster"
        src={movie.Poster}
        alt={movie.Title}
      />

      <div className="movie-info__text">
        <h1>{movie.Title}</h1>
        <p>
          <strong>Year:</strong> {movie.Year}
        </p>
        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Plot:</strong> {movie.Plot}
        </p>
        <p>
          <strong>Director:</strong> {movie.Director}
        </p>    
        <p>
          <strong>Actors:</strong> {movie.Actors}
        </p>
        <p>
            <strong>IMDB Rating:</strong> {movie.imdbRating}
        </p>
      </div>
    </div>
  );
}


export default MovieInfo;
