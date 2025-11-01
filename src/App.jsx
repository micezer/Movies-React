import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import MovieList from "./components/MovieList/MovieList";
import AllRoutes from "./routes/AllRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  );
};

export default App;
