import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import FilmCard from './FilmCard';

const baseProps = {
  id: '42',
  title: 'Inception',
  year: 2010,
  genre: 'Sci-fi',
  rating: 9,
  watched: false,
  onToggleWatched: vi.fn(),
  onRemove: vi.fn(),
};

describe('FilmCard', () => {
  it('zobrazí název filmu', () => {
    render(<FilmCard {...baseProps} />);
    expect(screen.getByText('Inception')).toBeInTheDocument();
  });

  it('zobrazí rok filmu', () => {
    render(<FilmCard {...baseProps} />);
    expect(screen.getByText('2010')).toBeInTheDocument();
  });

  it('zobrazí badge ✓ Zhlédnuto pokud watched === true', () => {
    render(<FilmCard {...baseProps} watched={true} />);
    expect(screen.getByText('✓ Zhlédnuto')).toBeInTheDocument();
  });

  it('nezobrazí badge ✓ Zhlédnuto pokud watched === false', () => {
    render(<FilmCard {...baseProps} watched={false} />);
    expect(screen.queryByText('✓ Zhlédnuto')).not.toBeInTheDocument();
  });

  it('zavolá onToggleWatched s id při kliknutí na tlačítko', async () => {
    const onToggleWatched = vi.fn();
    render(<FilmCard {...baseProps} onToggleWatched={onToggleWatched} />);
    await userEvent.click(screen.getByRole('button', { name: /označit jako zhlédnuté/i }));
    expect(onToggleWatched).toHaveBeenCalledTimes(1);
    expect(onToggleWatched).toHaveBeenCalledWith('42');
  });
});
