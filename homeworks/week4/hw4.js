const request = require('request');

const CLIENT_ID = 'j771b1ufyj2omuf8p2i5aoo4tumo44';
const API_ENDPOINT = 'https://api.twitch.tv/kraken';

request({
  method: 'GET',
  url: `${API_ENDPOINT}/games/top`,
  headers: {
    'Client-ID': CLIENT_ID,
  },
}, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }

  const data = JSON.parse(body);
  const games = data.top;
  // for(let of)ES6 語法處理疊代型的資料（iterable objects）如陣列，字串
  for (let i = 0; i <= games.length; i += 1) {
    console.log(`${games[i].viewers} ${games[i].game.name}`);
  }
});
