import type { Band } from '../types';

export const lastfm = async (): Promise<Band[]> => {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${process.env.LASTFM_USER}&api_key=${process.env.LASTFM_KEY}&format=json&limit=3&period=7day`
  );
  const data = await res.json();

  const { artist } = data.topartists;

  return artist.map(({ name, url }: Band) => ({ name, url }));
};
