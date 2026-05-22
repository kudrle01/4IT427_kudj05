import AddFilmForm from '@/components/AddFilmForm';
import FilmCard from '@/components/FilmCard';
import { useWatchlist } from '@/context/WatchlistContext';

function App() {
  const { films, watchedCount, toggleWatched, removeFilm, markAllAsWatched } = useWatchlist();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Moje filmotéka</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {watchedCount} / {films.length} zhlédnuto
            </p>
          </div>
          <button
            onClick={markAllAsWatched}
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors duration-200 cursor-pointer"
          >
            Označit vše jako zhlédnuté
          </button>
        </div>

        <AddFilmForm />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {films.map((film) => (
            <FilmCard
              key={film.id}
              {...film}
              onToggleWatched={toggleWatched}
              onRemove={removeFilm}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
