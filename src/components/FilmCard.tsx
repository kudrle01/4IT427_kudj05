import type { Film } from '@/types/film.types';

interface FilmCardProps extends Film {
  onToggleWatched: (id: string) => void;
  onRemove: (id: string) => void;
}

const FilmCard = ({
  id,
  title,
  year,
  genre,
  rating,
  watched,
  onToggleWatched,
  onRemove,
}: FilmCardProps) => {
  const isRatingValid = rating >= 1 && rating <= 10;

  return (
    <div
      className={`
        flex flex-col gap-4 rounded-2xl p-5 border
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-xl
        ${
          watched
            ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 shadow-md'
            : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 shadow-sm'
        }
      `}
    >
      {/* Název + badge */}
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
          {title}
        </h2>
        {watched && (
          <span className="shrink-0 inline-flex items-center gap-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-green-200 dark:border-green-700">
            ✓ Zhlédnuto
          </span>
        )}
      </div>

      {/* Meta tagy */}
      <div className="flex flex-wrap gap-2">
        <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
          {year}
        </span>
        <span className="text-xs text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/40 px-2.5 py-1 rounded-lg">
          {genre}
        </span>
        {isRatingValid ? (
          <span className="text-xs text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40 px-2.5 py-1 rounded-lg font-semibold">
            ★ {rating}/10
          </span>
        ) : (
          <span className="text-xs text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-2.5 py-1 rounded-lg">
            Neplatné hodnocení
          </span>
        )}
      </div>

      {/* Akce */}
      <div className="mt-auto flex flex-col gap-2 pt-1">
        <button
          onClick={() => onToggleWatched(id)}
          className={`w-full py-2 px-4 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer
            ${
              watched
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                : 'bg-purple-600 hover:bg-purple-700 text-white'
            }`}
        >
          {watched ? 'Označit jako nezhlédnuté' : 'Označit jako zhlédnuté'}
        </button>
        <button
          onClick={() => onRemove(id)}
          className="w-full py-2 px-4 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors duration-200 cursor-pointer"
        >
          Odebrat
        </button>
      </div>
    </div>
  );
};

export default FilmCard;
