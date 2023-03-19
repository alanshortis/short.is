export interface LastFmArtist {
  name: string;
  url: string;
}

export const getLastfm = async (): Promise<LastFmArtist[]> => {
  if (process.env.OFFLINE === '1') {
    return [
      { name: 'Tool', url: '/t' },
      { name: 'MF DOOM', url: '/m' },
      { name: 'Pink Floyd', url: '/p' },
    ];
  }

  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${process.env.LASTFM_USER}&api_key=${process.env.LASTFM_KEY}&format=json&limit=3&period=7day`
  );
  const data = await res.json();

  const { artist } = data.topartists;

  return artist.map(({ name, url }: LastFmArtist) => ({ name, url }));
};
