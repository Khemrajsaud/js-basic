// primitive 

// 7 types : string. number,boolean, null, undefined, symbol,bigint;

const  score = 100
const scoreValue = 100.5

const isLogginIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123");

console.log(id === anotherId);
const bigNumber =14246274724264627642742742n

// reference type:(non primitive)

// Array , object ,  function;

const heros = ["shaktiman", "naagraj", "daga"];

let myObj = {
    name : "khemraj",
    age: 22
}


const myfunction =  function (){
    console.log("hello world");
    
}

console.log(typeof myfunction);


// ++++++++++++++++++++++++++++++++++ memory ++++++++++++++++
// stack(primitive), heap(non primitive);



let anotherName = " hari"
let anotherPerson  = anotherName;
anotherName = "ram"
console.log(anotherName);
console.log(anotherPerson);

let userOne = {
    email: "user@goole.com",
    up: "user@bl"
}


let userTwo = userOne
userTwo.email = "kehmraj@google.com";

console.log(userOne.email);
console.log(userTwo.email);



