``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
前言：
有一個函式叫做 isValid，接收一個陣列，判斷陣列前兩項加起來是否為下一項的值。 valid 並回傳
i 會從 0 跑到 5 

1. 進入第一個 for 迴圈：判斷陣列裡面元素是否小於等於0，是的話回傳 invalid
   i=0; 0符合小於陣列長度6, 判斷 arr[0]=3 是否小於等於 0， 不是，執行 i++
2. i=1; 1符合小於陣列長度6, 判斷 arr[1]=5 是否小於等於 0， 不是，執行 i++
3. i=2; 2符合小於陣列長度6, 判斷 arr[2]=8 是否小於等於 0， 不是，執行 i++
4. i=3; 3符合小於陣列長度6, 判斷 arr[3]=13 是否小於等於 0， 不是，執行 i++
5. i=4; 4符合小於陣列長度6, 判斷 arr[4]=22 是否小於等於 0， 不是，執行 i++
6. i=5; 5符合小於陣列長度6, 判斷 arr[5]=35 是否小於等於 0， 不是，執行 i++
7. i=6; 6不符合小於陣列長度6, 跳出進入第二個 for 迴圈 ：判斷 if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
8. i=2; 2符合小於陣列長度6, 判斷 arr[2]=8 不等於 arr[1]=5 + arr[0]=3 的和，不是，回傳 valid
9. i=3; 3符合小於陣列長度6, 判斷 arr[3]=13 不等於 arr[2]=8 + arr[1]=5 的和，不是，回傳 valid
10. i=4; 4符合小於陣列長度6, 判斷 arr[4]=22 不等於 arr[3]=13 + arr[2]=8 的和，是，回傳 invalid
11. 停止


