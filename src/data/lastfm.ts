import type { WebisteLink } from '../types';

const isOffline = process.env.OFFLINE === 'offline';

const mock: WebisteLink[] = [
  { name: 'Some Band', url: '/' },
  { name: 'Some other Band', url: '/' },
];

export const lastfm = async (): Promise<WebisteLink[]> => {
  if (isOffline) return mock;

  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${process.env.LASTFM_USER}&api_key=${process.env.LASTFM_KEY}&format=json&limit=3&period=7day`
  );
  const data = await res.json();

  const { artist } = data.topartists;

  return artist.map(({ name, url }: WebisteLink) => ({ name, url }));
};
