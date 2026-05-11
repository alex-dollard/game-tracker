
const TOKEN_URL = 'https://id.twitch.tv/oauth2/token';
const IGDB_BASE = 'https://api.igdb.com/v4';

let accessToken: string | null = null;
let tokenExpiry: number = 0;

async function getAccessToken(): Promise<string> {
    if (accessToken && Date.now() < tokenExpiry) {
        return accessToken;
    }

    const response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            client_id: process.env.IGDB_CLIENT_ID!,
            client_secret: process.env.IGDB_CLIENT_SECRET!,
            grant_type: 'client_credentials'
        })
    });

    const data = await response.json() as { access_token: string; expires_in: number };
    accessToken = data.access_token;
    tokenExpiry = Date.now() + (data.expires_in * 1000) - 60000;

    return accessToken;
}

export async function searchGames(query: string) {
  const token = await getAccessToken();

  const response = await fetch(`${IGDB_BASE}/games`, {
    method: 'POST',
    headers: {
      'Client-ID': process.env.IGDB_CLIENT_ID!,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'text/plain'
    },
    body: `search "${query}"; fields id,name,cover.url,first_release_date; limit 10;`
  });

  const games = await response.json() as any[];

  return games.map(game => ({
    igdbId: game.id,
    title: game.name,
    coverUrl: game.cover ? `https:${game.cover.url}` : null,
    releaseYear: game.first_release_date
      ? new Date(game.first_release_date * 1000).getFullYear()
      : null
  }));
}