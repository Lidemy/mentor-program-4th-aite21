//回傳合起來的字串 & 重複 n 次之後的字串
function join(arr, concatStr) {
// 重要：如果 arr.length === 0 時會回傳空字串
	if (arr.length === 0) return ''
		
	let join = arr[0]
  	for (let i=1; i<arr.length; i++){
  		join += concatStr + arr [i] 
  		//  join += arr [i] + concatStr 常見錯誤：分隔符號只會在每個元素中間出現
  	}
  	return (join)
  } 

function repeat(str, times) {
	let result = ''
	for(let i=0; i<times; i++){
  	result += str
  	}
  	return result
} 


console.log(join(['a'], '!'))//正確回傳值：a 因為沒有執行到 arr[i]
console.log(join([1, 2, 3], '')) //正確回傳值：123
console.log(join(["a", "b", "c"], "!")) //正確回傳值：a!b!c
console.log(join(["a", 1, "b", 2, "c", 3], ',')) //正確回傳值：a,1,b,2,c,3
console.log(join(["aaa", "bb", "c", "dddd"], ',,'))//正確回傳值：aaa,,bb,,c,,dddd


console.log(repeat('a', 5))
console.log(repeat('yoyo', 2))