function repeatNum(num){
var n=num.toString()
var l=n.length
if(n[l-1]==n[l-2])
 return true
else
 return false
}
console.log(repeatNum(52399))//true
console.log(repeatNum(44)) //true
console.log(repeatNum(3339)) //false
