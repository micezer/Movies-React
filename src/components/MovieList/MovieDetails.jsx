import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const key = import.meta.env.VITE_API_KEY;

  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

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
      <h5 className="card-title text-primary text-overflow-1">{movie.title}</h5>
    </main>
  );
};

export default MovieDetails;
