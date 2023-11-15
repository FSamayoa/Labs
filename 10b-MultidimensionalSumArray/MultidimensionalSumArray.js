// function mdArraySum (arr) {
//   // Your code here:
​
//   let suma = 0
//   for (let index = 0; index < arr.length; index++) {
//     if(Array.isArray(arr[index])) {
//       suma += mdArraySum(arr[index])
//     }
//     else {
//       suma += arr[index]
//     }
    
//   }
​
//   return suma
​
// }
​
// POSIBLE SOLUCION
​
​
// function mdArraySum (arr) {
//   // Your code here:
​
//   let suma = 0
//   for (let i = 0; i < arr.length; i++) {
//     if(!arr.length > arr[i]){
//       suma+= arr[i]
//     }
//     else {
//       for (let j = 0; j < arr[i].length; j++) {
​
//     }
​
      
//     }
    
//   }
​
//   return suma
​
// }
​
​
function mdArraySum (arr) {
  // Your code here:
  return arr.reduce((suma, elemento)=> suma + (Array.isArray(elemento) ? mdArraySum(elemento) : elemento ), 0)
​
}
​
console.log(mdArraySum([ [2,4] , [1], [4,2,1] ] )) // output: 14
console.log(mdArraySum([1,2,3,4])) // output: 10
console.log(mdArraySum([ 2, [3,4], 5, [-3, [6 , [ 4,5 ] ] ] ] )) // output: 26
​
​
//console.log(typeof([1,2,3])) // Object
​
​
​
module.exports = mdArraySum