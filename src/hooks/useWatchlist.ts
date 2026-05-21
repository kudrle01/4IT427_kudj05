import { useEffect, useState } from 'react';
import type { Film } from '@/types/film.types';

export const useWatchlist = (initialFilms: Film[]) => {
  const [films, setFilms] = useState<Film[]>(initialFilms);

  const watchedCount = films.filter((f) => f.watched).length;

  useEffect(() => {
    document.title = `Watchlist (${watchedCount} / ${films.length} zhlédnuto)`;
  }, [watchedCount, films.length]);

  const toggleWatched = (title: string) => {
    setFilms((prev) =>
      prev.map((film) => (film.title === title ? { ...film, watched: !film.watched } : film))
    );
  };

  const markAllWatched = () => {
    setFilms((prev) => prev.map((film) => ({ ...film, watched: true })));
  };

  return { films, toggleWatched, markAllWatched, watchedCount };
};
