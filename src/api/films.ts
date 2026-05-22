import type { Film } from '@/types/film.types';

export const fetchFilms = async (): Promise<Film[]> => {
  const res = await fetch('/films.json');
  if (!res.ok) throw new Error('Nepodařilo se načíst filmy.');
  return res.json();
};
