import react from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  return (
    <div className="container">
      <div className="row row__column">
        <h1>Welcome to the Movie Library</h1>
        <p>Explore a wide range of movies and find your next favorite film.</p>
        <Link to="/movies">
          <button className="btn">Explore Movies</button>
        </Link>
      </div>
    </div>
  );
};
