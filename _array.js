const marval_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marval_heros.push(dc_heros)
// console.log(marval_heros);


const allHeros = marval_heros.concat(dc_heros); // it does not change the original array. it create a new array by combining two arrays.
console.log(allHeros);


//spreat operater.
const allNewHeros = [...marval_heros, ...dc_heros];
console.log(allNewHeros);


const anotherArr = [1,2,3,[4,5,67,[8,9,1,2]]]

const real_anotherArr_array = anotherArr.flat(Infinity) // flat method is used to a combine all bracket arrays in a one bracket.
console.log(real_anotherArr_array);


console.log(Array.isArray("khemraj")); //it checks whether the given value is an aray or not . it returns true or false. it is false here. 
console.log(Array.from("khemraj")); // it converts a string into an array by separacting each character.


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // it creates an array from the given values. like from wether array, or may be variables also.


