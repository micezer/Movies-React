import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../../context/MovieContext";

const MovieCard = ({ movie }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { poster_path, id, title, overview, vote_average, vote_count } = movie;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : null;

  return (
    <div className="col">
      <div className="card shadow-sm" title={title}>
        <img src={image} alt="movie poster" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-primary text-overflow-1">{title}</h5>
          <p className="card-text text-overflow-2">{overview}</p>

          <div className="d-flex justify-content-between align-items-center">
            <Link
              to={`/movie/${id}`}
              className="btn btn-sm btn-outline-primary"
            >
              Read More
            </Link>

            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => toggleFavorite(movie)}
            >
              {isFavorite(id) ? "❤️ Remove" : "🤍 Add"}
            </button>
          </div>

          <small>
            <i className="bi bi-star-fill text-warning"></i>
            {vote_average} | {vote_count} reviews
          </small>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
