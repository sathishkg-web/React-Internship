function randomNumber(min,max){
return Math.floor(Math.random()*(max-min+1)+min);
}
var x=randomNumber(100000,999999);
console.log(x)