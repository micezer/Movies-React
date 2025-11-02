import { useSearchParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies, error, loading } = useFetch({ apiPath, queryTerm });

  useEffect(() => {
    document.title = `Search results for "${queryTerm}"`;
  }, [queryTerm]);

  return (
    <main className="container py-4">
      <h3 className="text-center mb-4 text-primary">
        Results for "{queryTerm || ""}"
      </h3>

      {loading && (
        <div className="d-flex justify-content-center align-items-center py-5">
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && movies && movies.length > 0 && (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      {!loading && !error && movies && movies.length === 0 && (
        <p className="text-center text-muted">
          No results found for "{queryTerm}"
        </p>
      )}
    </main>
  );
};

export default Search;
