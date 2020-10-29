const request = require('request');

const args = process.argv;
//  process.argv 是讓 node.js 拿到執行 node hw2.js list 的 list 參數
const requestURL = 'https://lidemy-book-store.herokuapp.com';

const action = args[2];
const params = args[3];

function listBooks() {
  request.get(`${requestURL}/books?_limit=20`, (error, response, body) => {
    if (error) {
      console.log('抓取失敗', error);
      return;
    }
    const booksdata = JSON.parse(body);
    for (let i = 0; i < booksdata.length; i += 1) {
      console.log(`${booksdata[i].id} ${booksdata[i].name}`);
    }
  });
}

function readBooks(id) {
  request.get(`${requestURL}/books/${id}`, (error, response, body) => {
    if (error) {
      console.log('抓取失敗', error);
      return;
    }
    const booksdata = JSON.parse(body);
    console.log(booksdata);
  });
}

function deleteBooks(id) {
  request.delete(`${requestURL}/books/${id}`, (error, response, body) => { // eslint-disable-line
    if (error) {
      console.log('刪除失敗', error);
      return;
    }
    console.log('刪除成功');
  });
}

function createBooks(name) {
  request.post(
    {
      url: `${requestURL}/books`,
      form: {
        name,
      },
  }, (error, response) => { // eslint-disable-line
      if (error) {
        console.log('新增失敗', error);
        return;
      }
      console.log('新增成功！');
    },
  );
}

function updateBooks(id, name) {
  request.patch({
    url: `${requestURL}/books/${id}`,
    form: {
      name,
    },
  }, (error, response) => { // eslint-disable-line
    if (error) {
      console.log('更新失敗', error);
      return;
    }
    console.log('更新成功！');
  });
}

// Switch 判斷指令列接收的參數，連結對應的 function 產生結果

switch (action) {
  case 'list':
    listBooks();
    break;
  case 'read':
    readBooks(params);
    break;
  case 'delete':
    deleteBooks(params);
    break;
  case 'create':
    createBooks(params);
    break;
  case 'update':
    updateBooks(params, args[4]);
    break;
  default:
    console.log('Available commands: list, read, delete, create and update');
}
