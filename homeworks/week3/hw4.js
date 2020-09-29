const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line);
});

function reverse(S) {
  let reverseresult = '';
  for (let i = S.length - 1; i >= 0; i -= 1) {
    reverseresult += S[i];
  }
  return reverseresult;
}

//  上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(input) {
  const S = input[0];
  if (reverse(S) === S) {
    console.log('True');
  } else {
    console.log('False');
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines);
});

solve(['ac']);
solve(['abbbba']);
solve(['aX']);
