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
    'w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500';

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6 flex flex-col gap-4"
    >
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Přidat film</h2>
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
          placeholder="Rok"
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
      <button
        type="submit"
        className="self-end bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2 rounded-xl transition-colors duration-200 cursor-pointer"
      >
        Přidat
      </button>
    </form>
  );
};

export default AddFilmForm;
