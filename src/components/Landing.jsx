import React from "react";
import cinema-landing from "../assets/cinema-landing.png";

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
            <a href="#features">
              <button className="btn">Browse movies</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={cinema-landing} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;