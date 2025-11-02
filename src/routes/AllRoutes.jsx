import React from "react";
import { Route, Routes } from "react-router-dom";
import MovielList from "../components/MovieList/MovieList";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MovielList
              title="Discover Great Movies"
              apiPath="movie/now_playing"
            />
          }
        />
        <Route
          path="/movies/popular"
          element={
            <MovielList title="Popular Movies" apiPath="movie/popular" />
          }
        />
        <Route
          path="/movies/favorite"
          element={<MovielList title="Your Favorite Movies" />}
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
