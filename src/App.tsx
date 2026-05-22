/* Stylingová metoda: Tailwind CSS */
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import AddFilmForm from '@/components/AddFilmForm';
import FilmCard from '@/components/FilmCard';
import { useWatchlist } from '@/context/WatchlistContext';

function App() {
  const { films, watchedCount, toggleWatched, removeFilm, markAllAsWatched } = useWatchlist();
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setDark((d) => !d);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-10">

        {/* Dark mode toggle */}
        <div className="flex justify-end">
          <button
            onClick={toggleDark}
            className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
            aria-label="Přepnout motiv"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Header */}
        <header className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Moje filmotéka
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {watchedCount} / {films.length} zhlédnuto
            </p>
          </div>
          <button
            onClick={markAllAsWatched}
            className="bg-purple-600 hover:bg-purple-700 active:scale-95 text-white text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer shrink-0 mt-1"
          >
            Označit vše jako zhlédnuté
          </button>
        </header>

        {/* Formulář */}
        <AddFilmForm />

        {/* Grid karet */}
        {films.length === 0 ? (
          <p className="text-center text-gray-400 dark:text-gray-500 py-16">
            Watchlist je prázdný. Přidej první film.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {films.map((film) => (
              <FilmCard
                key={film.id}
                {...film}
                onToggleWatched={toggleWatched}
                onRemove={removeFilm}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
