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
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Moje filmotéka
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
      </div>
    </main>
  );
}

export default App;
