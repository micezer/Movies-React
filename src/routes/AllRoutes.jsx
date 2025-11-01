import React from "react";
import { Route, Routes } from "react-router-dom";
import MovielList from "../components/MovieList/MovieList";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MovielList title="Discover Great Movies" />}
        />
        <Route
          path="/movies/popular"
          element={<MovielList title="Popular Movies" />}
        />
        <Route
          path="/movies/favorite"
          element={<MovielList title="Your Favorite Movies" />}
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
