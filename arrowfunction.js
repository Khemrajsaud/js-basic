
const user = {
    username: "khemraj",
    price : 8787,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);  // thiis keyword used to pass inside the object key pairs values on function or other.
    
        
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// function chai(){
//     let username = "khemraj"
//     console.log(this.username);
    
// }
// chai()


const chai = ()=>{
    let username = "khemraj"
    console.log(this); // arrow function now allow to this keyword on functon. but access function.
    
}
chai()


// const addTwo = (num1 ,num2)=>{
//     return num1 +num2
// }
// console.log(addTwo(5,6));


// const addTwo = (num1, nume2) => num1 +nume2
 //here no need to return value. this is structure of this function.
 
// const addTwo = (num1, nume2) => (num1 +nume2)
const addTwo = (num1, nume2) => ({username: "khemraj"}) // object pass

console.log(addTwo(3,5));


