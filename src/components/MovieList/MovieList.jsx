import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const MovielList = ({ title, apiPath }) => {
  const { data: movies } = useFetch({ apiPath });

  useEffect(() => {
    document.title = title;
  });

  const navigator = useNavigate();

  return (
    <div>
      <main className="container">
        <header className="movie_list_header">
          <h2 className="text-danger py-2 border-bottom">{title}</h2>
        </header>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
          {movies && movies.length > 0 ? (
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <p>No se encontraron películas.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default MovielList;
