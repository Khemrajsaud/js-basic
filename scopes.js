

let a = 300;
if(true){

    let a = 10 
    // let is a block scope variable 
    // const b =20
     // const is a block scope variable.

    var c = 30
    // var is a function scope or global scope variable.
    console.log("Inner:", a);
    
}

// console.log(a); // error a is not defined due to block scope 
// console.log(b); // error b is not define  due to balck scope
// console.log(c); 
// it will work due to var is functioin or global scope variable.

console.log(a);



function one (){ // this is closer 
    const username = "khemraj"
    function two (){ // child function is access all variable value on parent function.
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}
one();




if(true){
    const user = "khemraj"
    if(user === "khemraj"){
        const webpage = "youtube"
        console.log(user + webpage);
        
    }
    // console.log(webpage);
    
}
// console.log(user);


console.log(addone(5)); //this is a function . it will be work.

function addone(num){
    return num+1
}

addtwo(5) //Cannot access 'addtwo' before initialization because this is a variable function then come to error
const addtwo = function(num){ // this is also function 
    return num +2
}

