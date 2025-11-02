import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const key = import.meta.env.VITE_API_KEY;

  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  useEffect(() => {
    async function fectchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => setMovie(jsonData));
    }
    fectchMovies();
  });

  useEffect(() => {
    document.title = `${movie.title}`;
  });
  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom mb-3">{movie.title}</h5>

      <div className="row">
        <div className="col-md-4">
          <img src={image} className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-8">
          <h3 className="text-primary">{movie.title}</h3>
          <p className="mt-3">{movie.overview}</p>

          {movie.genres ? (
            <p className="d-flex gap-3">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="badge bg-danger">
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <p className="mt-2">
            <i className="bi bi-star-fill text-warning"></i>
            {movie.vote_average} |
            <i className="bi bi-people-fill text-success"></i>
            {movie.vote_count} Reviews
          </p>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
