import { useSearchParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch({ apiPath, queryTerm });

  useEffect(() => {
    document.title = `search results for ${queryTerm}`;
  });
  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom">
        {!movies || movies.length === 0
          ? `No results found for "${queryTerm || ""}"`
          : `Results for "${queryTerm}"`}
      </h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
        {movies && movies.length > 0
          ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          : null}
      </div>
    </main>
  );
};

export default Search;
