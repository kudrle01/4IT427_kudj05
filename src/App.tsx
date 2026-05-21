import FilmCard from '@/components/FilmCard';
import { useWatchlist } from '@/hooks/useWatchlist';
import type { Film } from '@/types/film.types';

const initialFilms: Film[] = [
  { title: 'Inception', year: 2010, genre: 'Sci-fi', rating: 9, watched: true },
  { title: 'Interstellar', year: 2014, genre: 'Sci-fi', rating: 10, watched: false },
  { title: 'The Dark Knight', year: 2008, genre: 'Akční', rating: 9, watched: true },
];

function App() {
  const { films, toggleWatched, markAllWatched, watchedCount } = useWatchlist(initialFilms);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Moje filmotéka</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {watchedCount} / {films.length} zhlédnuto
            </p>
          </div>
          <button
            onClick={markAllWatched}
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors duration-200 cursor-pointer"
          >
            Označit vše jako zhlédnuté
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {films.map((film) => (
            <FilmCard
              key={film.title}
              title={film.title}
              year={film.year}
              genre={film.genre}
              rating={film.rating}
              watched={film.watched}
              onToggleWatched={toggleWatched}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
