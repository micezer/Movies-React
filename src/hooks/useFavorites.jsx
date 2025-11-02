import { useEffect, useState } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add or remove a movie from favorites
  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === movie.id);
      if (exists) {
        // Remove if already in favorites
        return prev.filter((fav) => fav.id !== movie.id);
      } else {
        // Add new movie
        return [...prev, movie];
      }
    });
  };

  // Check if a movie is already in favorites
  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return { favorites, toggleFavorite, isFavorite };
};

export default useFavorites;
