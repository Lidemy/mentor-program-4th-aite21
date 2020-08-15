//第一個字轉成大寫之後「回傳」

function capitalize(str) {
  for(let i=0; i<str.length; i++){
  	if (str[0]>='a' && str[0]<='z'){
  	return str[0].toUpperCase() + str.slice(1)
  	} else {
  	} return str
  }
}

console.log(capitalize('nick'))
console.log(capitalize('Nick'))
console.log(capitalize(',Hello'))



