// singleton

// object literals
const mySym = Symbol("key1"); // unique identifier.
const userName = {
    name: "khemraj",
    age: 22,
    [mySym]: "mykey1",
    location: "kathmandu",
    email: "khemrajsaud@gmail.com",
    isLoggedIn  :false,
    lastLoginDays: ["Monday","sunday"]
}
console.log(userName.email);
console.log(userName["email"]);
 
userName.email = "saudkhemraj@gmail.com" // changing email 
console.log(userName.email);
console.log(userName);


userName.greeting = function(){
    console.log("Hello js user");
    
}

userName.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`);
    
}
console.log(userName.greeting());
console.log(userName.greetingTwo());







