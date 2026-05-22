import FilmCard from '@/components/FilmCard';
import { useWatchlist } from '@/context/WatchlistContext';

const WatchlistPage = () => {
  const {
    films,
    isLoading,
    isError,
    refetch,
    watchedCount,
    toggleWatched,
    removeFilm,
    markAllAsWatched,
  } = useWatchlist();

  if (isLoading) {
    return <p className="text-center text-gray-400 dark:text-gray-500 py-24">Načítám…</p>;
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-4 py-24 text-center">
        <p className="text-red-500 dark:text-red-400">Nepodařilo se načíst filmy.</p>
        <button
          onClick={() => refetch()}
          className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors duration-200 cursor-pointer"
        >
          Zkusit znovu
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
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
  );
};

export default WatchlistPage;
