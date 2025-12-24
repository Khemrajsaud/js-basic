// Array is a data structure that can hold multiple values in a single variable.


const myArr = [0,1,2,3,4,5,];
console.log(myArr[2]);


// Array Methods

myArr.push(6); // adds an element at the end
myArr.pop()//remove last element
myArr.unshift(9); //adds an element at the begining.
myArr.shift(); //removes first element

console.log(myArr.includes(9)); // returns true or false  and checks element 9 is present or not . here not present 
console.log(myArr.indexOf(3));


const newArr = myArr.join(); // converts array to string with commas.
console.log(newArr);

console.log(myArr);


// slice and splice methods.


console.log("A" , myArr);
const myn1 = myArr.slice(1,3); // does not change the original array. it creates a new array from index 1 to index 3
console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3); // changes the original array.
console.log(myn2);
console.log("c", myArr);




