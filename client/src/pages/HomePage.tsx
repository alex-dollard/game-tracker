import { useState, useEffect } from 'react';

interface Game {
  igdbId: number;
  title: string;
  coverUrl: string | null;
  releaseYear: number | null;
}

interface UserGame {
  id: number;
  gameId: number;
  status: string;
  score: number | null;
  notes: string | null;
  game: Game & { id: number };
}

interface Props {
  token: string;
  onLogout: () => void;
}

export default function HomePage({ token, onLogout }: Props) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Game[]>([]);
  const [gameList, setGameList] = useState<UserGame[]>([]);
  
  const fetchList = async () => {
    console.log('token:', token);
    const res = await fetch('http://localhost:5000/api/games/list', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setGameList(data);
  };

  useEffect(() => {
  const loadList = async () => {
    await fetchList();
  };
  loadList();
}, []);

  

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const res = await fetch(
      `http://localhost:5000/api/games/search?q=${encodeURIComponent(query)}`
    );
    const data = await res.json();
    setSearchResults(data);
  };

  const handleAddGame = async (game: Game, status: string) => {
    const rest = await fetch('http://localhost:5000/api/games/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ ...game, status })
    });

    if (rest.ok) {
      fetchList();
      setSearchResults([]);
      setQuery('');
    }
  };

  const handleStatusChange = async (gameId: number, status: string) => {
    await fetch(`http://localhost:5000/api/games/list/${gameId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ status })
    });
    fetchList();
  };

  const handleRemove = async (gameId: number) => {
    await fetch(`http://localhost:5000/api/games/list/${gameId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchList();
  };

  const STATUSES = ['PLAYING', 'COMPLETED', 'DROPPED', 'ON_HOLD', 'WANT_TO_PLAY'];

  return (
    <div>
      <div>
        <h1>Game Tracker</h1>
        <button onClick={onLogout}>Logout</button>
      </div>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a game..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          {searchResults.map(game => (
            <div key={game.igdbId}>
              {game.coverUrl && (
                <img src={game.coverUrl} alt={game.title} width={60} />
              )}
              <div>
                <p>{game.title} {game.releaseYear ? `(${game.releaseYear})` : ''}</p>
                <select onChange={e => handleAddGame(game, e.target.value)} defaultValue="">
                  <option value="" disabled>Add to list...</option>
                  {STATUSES.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      )}

      <div>
        <h2>My List</h2>
        {gameList.length === 0 && <p>No games on your list yet.</p>}
        {gameList.map(entry => (
          <div key={entry.id}>
            {entry.game.coverUrl && (
              <img src={entry.game.coverUrl} alt={entry.game.title} width={60} />
            )}
            <div>
              <p>{entry.game.title} {entry.game.releaseYear ? `(${entry.game.releaseYear})` : ''}</p>
              <select
                value={entry.status}
                onChange={e => handleStatusChange(entry.gameId, e.target.value)}
              >
                {STATUSES.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <button onClick={() => handleRemove(entry.gameId)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}