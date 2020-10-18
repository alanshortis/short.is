const rp = require('request-promise');
const { SPOTIFY_CLIENT, SPOTIFY_SECRET, SPOTIFY_USER } = process.env;

const authB64 = new Buffer.from(`${SPOTIFY_CLIENT}:${SPOTIFY_SECRET}`).toString('base64');

const tokenAuth = {
  method: 'POST',
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    Authorization: `Basic ${authB64}`,
  },
  form: {
    grant_type: 'client_credentials',
  },
  json: true,
};

const playlistAuth = token => {
  return {
    method: 'GET',
    url: `https://api.spotify.com/v1/users/${SPOTIFY_USER}/playlists`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    qs: {
      offset: 0,
      limit: 50,
    },
    json: true,
  };
};

module.exports = async function () {
  return rp(tokenAuth)
    .then(body => body.access_token)
    .then(access_token => playlistAuth(access_token))
    .then(options => rp(options))
    .then(res => {
      return {
        annual: res.items.filter(playlist => /[0-9]{4}/.test(playlist.name)),
        theme: res.items.filter(playlist => !/[0-9]{4}/.test(playlist.name)),
      };
    });
};
