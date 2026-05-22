import { useState, type SyntheticEvent } from 'react';
import { useWatchlist } from '@/context/WatchlistContext';

const AddFilmForm = () => {
  const { addFilm } = useWatchlist();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addFilm({ title, year: Number(year), genre, rating: Number(rating) });
    setTitle('');
    setYear('');
    setGenre('');
    setRating('');
  };

  const inputClass =
    'w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200';

  return (
    <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
      <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
        Přidat film
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            required
            placeholder="Název"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={inputClass}
          />
          <input
            required
            type="number"
            placeholder="Rok vydání"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={inputClass}
          />
          <input
            required
            placeholder="Žánr"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className={inputClass}
          />
          <input
            required
            type="number"
            placeholder="Hodnocení (1–10)"
            min={1}
            max={10}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 active:scale-95 text-white text-sm font-medium px-5 py-2 rounded-xl transition-all duration-200 cursor-pointer"
          >
            Přidat film
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddFilmForm;
