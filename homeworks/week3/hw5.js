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

function Compare(AA, BB, K) {
  if (AA === BB) return 'DRAW';
  if (K === -1) {
    const exchange = AA; // eslint-disable-line
    AA = BB; // eslint-disable-line
    BB = exchange; // eslint-disable-line
  }

  const lengtha = AA.length;
  const lengthb = BB.length;

  if (lengtha !== lengthb) {
    return lengtha > lengthb ? 'A' : 'B';
  }

  for (let r = 0; r < lengtha; r += 1) {
    if (AA[r] === BB[r]) {
      return AA[r] > BB[r] ? 'A' : 'B';
    }
  }
}


function solve(input) {
  const M = Number(input[0]);
  for (let i = 1; i <= M; i += 1) {
    const [AA, BB, K] = input[i].split(' ');
    console.log(Compare(AA, BB, K));
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines);
});
