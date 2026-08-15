import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight.jsx";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose this <span className="purple">movie library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              para="Get access to the movie you want online instantly."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="fa-film" />}
              title="10,000+ Movies"
              para="Library has movies in all your favourite categories."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
