import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import MovieDetails from "../components/MovieList/MovieDetails";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              title="Discover Great Movies"
              apiPath="movie/now_playing"
            />
          }
        />
        <Route
          path="/movies/popular"
          element={<MovieList title="Popular Movies" apiPath="movie/popular" />}
        />
        <Route
          path="/movies/favorite"
          element={<MovieList title="Your Favorite Movies" />}
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
