const request = require('request');

const args = process.argv;
const API_ENDPOINT = 'https://restcountries.eu/rest/v2';

const name = args[2];

request(`${API_ENDPOINT}/name/${name}`, (error, response, body) => {
  //  先處理 edge case 情況
  if (!name) {
    console.log('請輸入國家名稱');
    return;
  }

  if (error) {
    console.log('抓取失敗', error);
    return;
  }

  const data = JSON.parse(body);
  if (data.status === 404) {
    console.log('找不到國家資訊');
    return;
  }

  for (let i = 0; i < data.length; i += 1) {
    console.log(`============`); // eslint-disable-line
    console.log(`國家：${data[i].name}`); // eslint-disable-line
    console.log(`首都：${data[i].capital}`); // eslint-disable-line
    console.log(`貨幣：${data[i].currencies[0].code}`); // eslint-disable-line
    console.log(`國碼：${data[i].callingCodes[0]}`); // eslint-disable-line
  }
});
