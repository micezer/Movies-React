import { createContext, useState, useContext, useEffect } from "react";

// 1️⃣ Crear el contexto
const MovieContext = createContext();

// 2️⃣ Proveedor global
export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // 3️⃣ Guardar en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // 4️⃣ Alternar favoritos
  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      const exists = prev.find((m) => m.id === movie.id);
      return exists ? prev.filter((m) => m.id !== movie.id) : [...prev, movie];
    });
  };

  // 5️⃣ Verificar si es favorito
  const isFavorite = (id) => favorites.some((m) => m.id === id);

  return (
    <MovieContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </MovieContext.Provider>
  );
};

// 6️⃣ Hook personalizado para consumir el contexto
export const useFavorites = () => useContext(MovieContext);
