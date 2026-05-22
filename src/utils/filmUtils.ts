import type { Film } from '@/types/film.types';

export const filterFilmsByTitle = (films: Film[], query: string): Film[] => {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return films;
  return films.filter((f) => f.title.toLowerCase().includes(normalized));
};

export const calculateAverageRating = (films: Film[]): number => {
  if (films.length === 0) return 0;
  const sum = films.reduce((acc, f) => acc + f.rating, 0);
  return Math.round((sum / films.length) * 10) / 10;
};
