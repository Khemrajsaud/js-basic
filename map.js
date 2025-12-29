const myNumbers = [1,2,3,4,5,6,7,8,9];

// const newNumber = myNumbers.map((num)=> num +10) // map return value automatically.
// console.log(newNumber);


const newNumber = myNumbers.map((num)=> { return num +10}) // map return value automatically.
console.log(newNumber);


const myNumber = [1,2,3,4,5,6,7,8,9];

const newNums = myNumber.map((num)=> num*10)// multiple chaining . using multiple methode like (map,map,filter)
.map((num)=> num +1)
.filter((num)=> num >=40);
console.log(newNums);
