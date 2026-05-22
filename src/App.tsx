import { useState } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import WatchlistPage from '@/pages/WatchlistPage';
import AddFilmPage from '@/pages/AddFilmPage';

function App() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setDark((d) => !d);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium px-4 py-2 rounded-xl transition-colors duration-200 ${
      isActive
        ? 'bg-purple-600 text-white'
        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
    }`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>
              Můj watchlist
            </NavLink>
            <NavLink to="/form" className={navLinkClass}>
              Přidat film
            </NavLink>
          </nav>
          <button
            onClick={toggleDark}
            className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
            aria-label="Přepnout motiv"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <Routes>
          <Route path="/" element={<WatchlistPage />} />
          <Route path="/form" element={<AddFilmPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
