/* KP's solution to Problem 2
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

var fibSequence = [1,2];
var limit = 4000000;
var fibEven = [];
var sum = 0;
var evenSum = 0;
//finding the fibSequence
for (var i=0; i<limit; i++){
  if (fibSequence[i] < limit){
  sum = fibSequence[i+1] + fibSequence [i];
  fibSequence.push(sum);
 // console.log(fibSequence[i]);
  if (fibSequence[i]%2 === 0){
    //fibEven.push(fibSequence[i]);
    evenSum = evenSum + fibSequence[i];
  }
}else{
 // console.log('reached val of 4 mil');
 // console.log('even terms ' + fibEven.length);
  console.log('sum of even terms is ' + evenSum);
  i= limit;
}
}
