import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchFilms } from '@/api/films';
import type { Film } from '@/types/film.types';

interface WatchlistContextValue {
  films: Film[];
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
  watchedCount: number;
  addFilm: (data: Omit<Film, 'id' | 'watched'>) => void;
  removeFilm: (id: string) => void;
  toggleWatched: (id: string) => void;
  markAllAsWatched: () => void;
}

const WatchlistContext = createContext<WatchlistContextValue | null>(null);

export const WatchlistProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['films'],
    queryFn: fetchFilms,
    staleTime: 5 * 60 * 1000,
  });

  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    if (data) setFilms(data);
  }, [data]);

  const watchedCount = films.filter((f) => f.watched).length;

  useEffect(() => {
    document.title = `Watchlist (${watchedCount} / ${films.length} zhlédnuto)`;
  }, [watchedCount, films.length]);

  const addFilm = (filmData: Omit<Film, 'id' | 'watched'>) => {
    setFilms((prev) => [...prev, { ...filmData, id: Date.now().toString(), watched: false }]);
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
      value={{
        films,
        isLoading,
        isError,
        refetch,
        watchedCount,
        addFilm,
        removeFilm,
        toggleWatched,
        markAllAsWatched,
      }}
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
