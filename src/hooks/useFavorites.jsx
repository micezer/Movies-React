import { useEffect, useState } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === movie.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  };

  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return { favorites, toggleFavorite, isFavorite };
};

export default useFavorites;
