import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { convertMovieMinuties } from "../../utils/utils";
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
  }, []);

  useEffect(() => {
    document.title = `${movie.title}`;
  });
  return (
    <main className="container">
      <h5
        className="py-2 border-bottom mb-3"
        style={{ color: "rgb(0, 255, 127)" }}
      >
        {movie.title}
      </h5>

      <div className="row">
        <div className="col-md-4">
          <img src={image} className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-8">
          <h3 style={{ color: "rgb(0, 255, 127)" }}>{movie.title}</h3>
          <p className="mt-3" style={{ color: "white" }}>
            {movie.overview}
          </p>
          {movie.genres ? (
            <p className="d-flex gap-3">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="badge"
                  style={{
                    backgroundColor: "rgb(0, 255, 127)",
                    color: "black",
                  }}
                >
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
          <table
            className="table table-bordered w-50 mt-2"
            style={{ backgroundColor: "rgb(33, 37, 41)" }}
          >
            <tbody>
              {[
                ["Runtime", convertMovieMinuties(movie.runtime)],
                ["Budget", movie.budget],
                ["Revenue", movie.revenue],
                ["Release Date", movie.release_date],
              ].map(([label, value], i) => (
                <tr
                  key={i}
                  style={{ backgroundColor: "rgb(33, 37, 41)", color: "white" }}
                >
                  <th
                    style={{
                      backgroundColor: "rgb(33, 37, 41)",
                      color: "white",
                    }}
                  >
                    {label}
                  </th>
                  <td
                    style={{
                      backgroundColor: "rgb(33, 37, 41)",
                      color: "white",
                    }}
                  >
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
