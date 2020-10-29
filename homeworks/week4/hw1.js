const request = require('request');

const requestURL = 'https://lidemy-book-store.herokuapp.com/books?_limit=10';

request(requestURL, (error, response, body) => {
  // console.error('error:', error); // Print the error if one occurred
  const booksdata = JSON.parse(body);
  for (let i = 0; i < booksdata.length; i += 1) {
    // eslint-disable-next-line
      console.log(booksdata[i].id + ' ' + booksdata[i].name);
  }
});
