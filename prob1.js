/* KP's solution to Problem 1:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var sum = 0;
var number = 1000;

for (var i=1; i<number ; i++){
if ((i%3)===0 || (i%5)===0){
  //console.log(i); to print multiples
  sum = sum +i;
}
}
console.log('the sum is ' + sum);
