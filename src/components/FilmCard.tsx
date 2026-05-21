import type { Film } from '@/types/film.types';

interface FilmCardProps extends Film {
  onToggleWatched: (title: string) => void;
}

const FilmCard = ({ title, year, genre, rating, watched, onToggleWatched }: FilmCardProps) => {
  const isRatingValid = rating >= 1 && rating <= 10;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col gap-4 border border-gray-100 dark:border-gray-700">
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{title}</h2>
        {watched && (
          <span className="shrink-0 inline-flex items-center gap-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 text-xs font-semibold px-2.5 py-1 rounded-full">
            ✓ Zhlédnuto
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-3 py-1 rounded-full">
          {year}
        </span>
        <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs px-3 py-1 rounded-full">
          {genre}
        </span>
        {isRatingValid ? (
          <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-xs px-3 py-1 rounded-full font-semibold">
            ★ {rating}/10
          </span>
        ) : (
          <span className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 text-xs px-3 py-1 rounded-full">
            Neplatné hodnocení
          </span>
        )}
      </div>

      <button
        onClick={() => onToggleWatched(title)}
        className={`mt-auto w-full py-2 px-4 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer ${
          watched
            ? 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            : 'bg-purple-600 hover:bg-purple-700 text-white'
        }`}
      >
        {watched ? 'Označit jako nezhlédnuté' : 'Označit jako zhlédnuté'}
      </button>
    </div>
  );
};

export default FilmCard;
