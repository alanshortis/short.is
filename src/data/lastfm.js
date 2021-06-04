const getLastfm = async () => {
  const ARTISTS = 3;
  const PERIOD = '7day';

  const res = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${process.env.LASTFM_USER}&api_key=${process.env.LASTFM_KEY}&format=json&period=${PERIOD}&limit=${ARTISTS}`
  );
  const data = await res.json();
  const { artist: artists } = data.topartists;

  const lastFm = artists.map(artist => {
    return {
      name: artist.name,
      url: artist.url,
    };
  });

  return lastFm;
};

export default getLastfm;
