import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Movie = ({ Movie }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = Movie.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };
    return () => {
      mountedRef.current = false;
    };
  }, [Movie.url]);

  return (
    <div className="Movie">
      {!img ? (
        <>
          <div className="Movie__img--skeleton"></div>
          <div className="skeleton Movie__title--skeleton"></div>
        </>
      ) : (
        <>
          <Link to={`/Movies/${Movie.id}`}>
            <figure className="Movie__img--wrapper">
              <img className="Movie__img" src={img.src} alt="" />
            </figure>
          </Link>
          <div className="Movie__title">
            <Link to={`/Movies/${Movie.id}`} className="Movie__title--link">
              {Movie.title}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
