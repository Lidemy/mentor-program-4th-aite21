const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line);
});

function isPrime(n) {
  if (n === 1) return false;
  const num = Math.sqrt(n);
  for (let i = 2; i <= num; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//  上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(input) {
  for (let i = 1; i < input.length; i += 1) {
    console.log(isPrime(Number(input[i])) ? 'Prime' : 'Composite');
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines);
});

solve(['5']);
