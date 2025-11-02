import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      const exists = prev.find((m) => m.id === movie.id);
      return exists ? prev.filter((m) => m.id !== movie.id) : [...prev, movie];
    });
  };

  const isFavorite = (id) => favorites.some((m) => m.id === id);

  return (
    <MovieContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useFavorites = () => useContext(MovieContext);
