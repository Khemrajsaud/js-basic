// if

const tempture  = 41;

if (tempture === 41){
    console.log("tempture is equal to 41");
    
} else {
    console.log("tempture is greater than 41");
    
}
console.log("code execute");


const score = 200;
if(score > 100){
    let power = "fly"
    console.log(`user power: ${power}`);
    
}
    //console.log(`user power: ${power}`); // this is not excute because power is a block scope due to not run.

    // const balance = 1000
    // if(balance > 5000) console.log("test"),console.log("test2");
    // ;
    

const balance = 1000;

if(balance<500){
    console.log("less than");
    
} else if( balance <700){
    console.log("less than 700");
    
}
 else if( balance <900){
    console.log("less than 900");
    
}
else {
    console.log("less than 1200");
    
}


const userLoggedIn = true;
const debitcart = true;
const loggedInFromGoogle = false;
const loggedInfromEmail = true;

if (userLoggedIn && debitcart){
    console.log("Allow to by course");
    
}
if(loggedInFromGoogle || loggedInfromEmail){
    console.log("user logged In");
    
}