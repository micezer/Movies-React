import React from "react";
import React, { useEffect, useState } from "react";

const useFetch = ({ apiPath }) => {
  const [data, setData] = useState([]);
  const key = import.meta.API_KEY;
  const url = `https://api.themoviedb.org/3/${apiPath}/api_key=${key}&query=${queryTerm}`;

  useEffect(() => {
    async function fectchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => setData(jsonData.results));
    }
    fectchMovies();
  }, [url]);
  return { data };
};

export default useFetch;
