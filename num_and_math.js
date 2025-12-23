const score = 400;
console.log(score); //this is not defined number


const balance = new Number(100); // this is defined number object

console.log(balance);

console.log(balance.toString()); // convert number to string

console.log(balance.toFixed(2)); // it fixed decimal point after 2 value


const otherNumber = 1235.34355; 
console.log(otherNumber.toPrecision(4)); // it fixed total digit 4 including before and after decimal point


const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-NP'));//it convert number to local string format. here neplalise format.


//++++++++++++++++++++++ Maths ++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // it is return absolute value means if assign negative value it convert to positive value on output.
console.log(Math.round(4.6)); // it is round off neriast value.
console.log(Math.ceil(4.2)); //it is return next integer value.

console.log(Math.floor(4.6)); //it is return previous integer value.
console.log(Math.min(2,3,4,5,5,6)); // it is return minimun(means smallest value inside the min method.)
console.log(Math.max(2,3,4,5,6)) //it is return maximum vlaue inside the max method.


console.log(Math.random()); // it is ruturn random value between 0 to 1 but not include 1 .

let min = 10;
let max = 20 ;

console.log(Math.floor(Math.random()*(max-min + 1)) +min);

 





