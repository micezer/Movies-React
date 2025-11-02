import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import MovieDetails from "../components/MovieList/MovieDetails";
import Favorites from "../components/MovieList/Favorites";

import Search from "../components/MovieList/Search";

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
        <Route path="/movies/favorite" element={<Favorites />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<Search apiPath="search/movie" />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
