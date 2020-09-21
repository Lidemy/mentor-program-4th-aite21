const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line);
});

// 判斷幾位數：回傳數字幾位數
// 方法一：if (0 到 10)，回傳 1 ...10 到 100，回傳 2
// 方法二：利用十進位的位數判斷和科學記號表示 1e2(100) 1e3(1000)，方法侷限在知道題目範圍
// 方法三: 判斷除 10 除了幾次，一直除以 10 無條件捨去 [ex: 1234=> 123 => 12 => 1]
function digitsCount(n) {
  if (n === 0) return 1;
  let result = 0;
  while (n !== 0) {
    n = Math.floor(n / 10); // eslint-disable-line
    result = result + 1; // eslint-disable-line
  }
  return result;
}


function isNarcissistic(n) {
  let m = n; // n 到最後會變成 0 導致無法判斷，因此這裡將 n 複製一份
  const digits = digitsCount(m);
  let sum = 0;
  // n 對 10 取於數
  while (m !== 0) {
    const num = m % 10;
    sum += num ** digits; // 2**10 2的十次方 = Math.pow(2,10)
    m = Math.floor(m / 10);
  }
  // 可簡化成 return sum === n
  if (sum === n) {
    return true;
  }
  return false;
}

//  上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(input) {
  const S = input[0].split(' '); // 取得第 0 行 ex: 5 200 =>切成陣列 ['5','200']
  const n = Number(S[0]);
  const m = Number(S[1]);
  for (let i = n; i <= m; i += 1) {
    if (isNarcissistic(i)) {
      console.log(i);
    }
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines);
});

solve(['5 200']);
