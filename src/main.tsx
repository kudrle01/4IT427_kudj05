import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@/index.css';
import App from '@/App.tsx';
import { WatchlistProvider } from '@/context/WatchlistContext';
import { ThemeProvider } from '@/context/ThemeContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <WatchlistProvider>
          <App />
        </WatchlistProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
