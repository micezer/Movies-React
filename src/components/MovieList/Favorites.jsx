import { useFavorites } from "../../context/MovieContext";
import MovieCard from "./MovieCard";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <main className="container">
      <h3 className="py-2 border-bottom">Your Favorite Movies</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
        {favorites.length > 0 ? (
          favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </main>
  );
};

export default Favorites;
