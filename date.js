// Dates 

const myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);


// const myCreatedDate = new Date(2023,0,23);
// const myCreatedDate = new Date(2023,0,23,5,7);
// const myCreatedDate = new Date("2023-12-23");
const myCreatedDate = new Date("01-23-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log((newDate.getDay()));


// `${newDate.getDate()} and the time`









