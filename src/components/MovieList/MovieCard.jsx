import React from "react";

import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movie poster"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title text-primary">{movie.original_title}</h5>
          <p className="card-text">{movie.release_date}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link to="" className="btn btn-sm btn-outline-primary">
              Read More
            </Link>

            <small>
              <i className="bi bi-star-fill text-warning"></i>
              {movie.rate_average} | 250 reviews
            </small>
          </div>

          <p className="movie_description">
            {movie.overview.slice(0, 100) + "..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
