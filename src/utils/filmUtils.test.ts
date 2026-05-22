import { describe, expect, it } from 'vitest';
import { calculateAverageRating, filterFilmsByTitle } from './filmUtils';
import type { Film } from '@/types/film.types';

const films: Film[] = [
  { id: '1', title: 'Inception', year: 2010, genre: 'Sci-fi', rating: 9, watched: true },
  { id: '2', title: 'Interstellar', year: 2014, genre: 'Sci-fi', rating: 10, watched: false },
  { id: '3', title: 'The Dark Knight', year: 2008, genre: 'Akční', rating: 9, watched: true },
];

describe('filterFilmsByTitle', () => {
  it('vrátí filmy obsahující hledaný výraz', () => {
    const result = filterFilmsByTitle(films, 'inter');
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Interstellar');
  });

  it('vyhledávání je case-insensitive', () => {
    const result = filterFilmsByTitle(films, 'INCEPTION');
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Inception');
  });

  it('ignoruje mezery na začátku a konci výrazu', () => {
    const result = filterFilmsByTitle(films, '  dark  ');
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('The Dark Knight');
  });

  it('prázdný výraz vrátí všechny filmy', () => {
    const result = filterFilmsByTitle(films, '');
    expect(result).toHaveLength(films.length);
  });
});

describe('calculateAverageRating', () => {
  it('správně vypočítá průměr hodnocení', () => {
    const result = calculateAverageRating(films);
    expect(result).toBe(9.3);
  });

  it('vrátí 0 pro prázdné pole', () => {
    const result = calculateAverageRating([]);
    expect(result).toBe(0);
  });

  it('vrátí přesné hodnocení pro pole s jedním filmem', () => {
    const result = calculateAverageRating([films[0]]);
    expect(result).toBe(9);
  });
});
