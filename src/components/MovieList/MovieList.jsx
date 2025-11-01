import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovielList = ({ title }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fectchMovies();
  }, []);

  const fectchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d60d220166b72adbeb5529087f614ffb"
    );
    const data = await response.json();
    setMovies(data.results);
  };
  return (
    <div>
      <main className="container">
        <header className="movie_list_header">
          <h2 className="text-danger py-2 border-bottom">
            {title} <img src="" alt="" />
          </h2>
        </header>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MovielList;
