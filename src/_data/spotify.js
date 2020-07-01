const rp = require('request-promise');
const { SPOTIFY_CLIENT, SPOTIFY_SECRET, SPOTIFY_USER } = process.env;
const authB64 = new Buffer.from(`${SPOTIFY_CLIENT}:${SPOTIFY_SECRET}`).toString('base64');

module.exports = async function () {
  const authOptions = {
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

  return rp(authOptions)
    .then(body => body.access_token)
    .then(access_token => {
      return {
        method: 'GET',
        url: `https://api.spotify.com/v1/users/${SPOTIFY_USER}/playlists`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        qs: {
          offset: 0,
          limit: 50,
        },
        json: true,
      };
    })
    .then(options => rp(options))
    .then(res => {
      const annual = res.items.filter(playlist => {
        return /[0-9]{4}/.test(playlist.name);
      });

      const theme = res.items.filter(playlist => {
        return !/[0-9]{4}/.test(playlist.name);
      });

      return {
        annual,
        theme,
      };
    });
};
