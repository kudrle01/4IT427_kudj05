interface FilmCardProps {
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
  onToggleWatched: (title: string) => void;
}

const FilmCard = ({ title, year, genre, rating, watched, onToggleWatched }: FilmCardProps) => {
  const isRatingValid = rating >= 1 && rating <= 10;

  return (
    <div>
      <h2>{title}</h2>
      <p>{year}</p>
      <p>{genre}</p>
      <p>{isRatingValid ? `Hodnocení: ${rating}` : 'Neplatné hodnocení'}</p>
      {watched && <p>✓ Zhlédnuto</p>}
      <button onClick={() => onToggleWatched(title)}>Změnit stav zhlédnutí</button>
    </div>
  );
};

export default FilmCard;
