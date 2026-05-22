import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Film } from '@/types/film.types';

interface WatchlistContextValue {
  films: Film[];
  watchedCount: number;
  addFilm: (data: Omit<Film, 'id' | 'watched'>) => void;
  removeFilm: (id: string) => void;
  toggleWatched: (id: string) => void;
  markAllAsWatched: () => void;
}

const WatchlistContext = createContext<WatchlistContextValue | null>(null);

const initialFilms: Film[] = [
  { id: '1', title: 'Inception', year: 2010, genre: 'Sci-fi', rating: 9, watched: true },
  { id: '2', title: 'Interstellar', year: 2014, genre: 'Sci-fi', rating: 10, watched: false },
  { id: '3', title: 'The Dark Knight', year: 2008, genre: 'Akční', rating: 9, watched: true },
];

export const WatchlistProvider = ({ children }: { children: ReactNode }) => {
  const [films, setFilms] = useState<Film[]>(initialFilms);

  const watchedCount = films.filter((f) => f.watched).length;

  useEffect(() => {
    document.title = `Watchlist (${watchedCount} / ${films.length} zhlédnuto)`;
  }, [watchedCount, films.length]);

  const addFilm = (data: Omit<Film, 'id' | 'watched'>) => {
    setFilms((prev) => [...prev, { ...data, id: crypto.randomUUID(), watched: false }]);
  };

  const removeFilm = (id: string) => {
    setFilms((prev) => prev.filter((f) => f.id !== id));
  };

  const toggleWatched = (id: string) => {
    setFilms((prev) => prev.map((f) => (f.id === id ? { ...f, watched: !f.watched } : f)));
  };

  const markAllAsWatched = () => {
    setFilms((prev) => prev.map((f) => ({ ...f, watched: true })));
  };

  return (
    <WatchlistContext.Provider
      value={{ films, watchedCount, addFilm, removeFilm, toggleWatched, markAllAsWatched }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const ctx = useContext(WatchlistContext);
  if (!ctx) throw new Error('useWatchlist musí být použit uvnitř WatchlistProvider');
  return ctx;
};
