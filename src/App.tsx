import './App.css';
import FilmCard from './components/FilmCard';

const films = [
  { title: 'Interstellar', year: 2014, genre: 'Sci-Fi', rating: 9, watched: true },
  { title: 'Inception', year: 2010, genre: 'Thriller', rating: 8, watched: false },
  { title: 'The Dark Knight', year: 2008, genre: 'Akce', rating: 15, watched: true },
];

function App() {
  const handleToggleWatched = (title: string) => {
    console.log(`Změna stavu zhlédnutí pro: ${title}`);
  };

  return (
    <>
      {films.map((film) => (
        <FilmCard
          key={film.title}
          title={film.title}
          year={film.year}
          genre={film.genre}
          rating={film.rating}
          watched={film.watched}
          onToggleWatched={handleToggleWatched}
        />
      ))}
    </>
  );
}

export default App;
