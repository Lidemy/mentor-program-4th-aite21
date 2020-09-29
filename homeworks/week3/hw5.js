const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line);
});

//  上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容

function Compare(a, b, K) {
  if (a === b) return 'DRAW';

  if (K == -1) { // eslint-disable-line
    const exchange = a; // eslint-disable-line
    a = b; // eslint-disable-line
    b = exchange; // eslint-disable-line
  }

  const lengthA = a.length;
  const lengthB = b.length;

  if (lengthA !== lengthB) {
    return lengthA > lengthB ? 'A' : 'B';
  }
  return a > b ? 'A' : 'B';
}

function solve(input) {
  const M = Number(input[0]); // 比幾次的數字，第一行陣列
  for (let i = 1; i <= M; i += 1) {
    const [a, b, K] = input[i].split(' '); // abK分別為第[i]行的陣列字串
    console.log(Compare(a, b, K));
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines);
});
