import React from "react";
import cinemaLanding from "../assets/cinema-landing.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's most awarded online movie platform</h1>
            <h2>
              Ready to find your favorite <span className="purple">Movies</span>
            </h2>
            <Link to="/movies">
              <button className="btn">Browse movies</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={cinemaLanding} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
