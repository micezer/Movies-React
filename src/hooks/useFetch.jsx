import { useEffect, useState } from "react";

const useFetch = ({ apiPath, queryTerm = "" }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const key = import.meta.env.VITE_API_KEY;

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
        const jsonData = await res.json();
        setData(jsonData.results || []);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
