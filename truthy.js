// const userEmail = "gmail.com"

// if(userEmail){
//     console.log("got user email");
    
// } else {
//     console.log("Don't have user email");
    
// }


//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN;

//truthy values
// "0", 'false' , " ", [], {}, function(){};

const userEmail = [] // this is for chech truthy value for array check

if (userEmail.length === 0){
    console.log("array is empty");
    

}else {
    console.log("array is not a empty");
    
}


const emptyObj = {} // check empty object truthy value
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");;
    
}


// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10; // ?? this is check multiple values like null or undefined and value .
// output is 5
val1 = null ?? 10
// output is 10

val1 = undefined ??15;
// output is 15

val1 = null ?? 10 ?? 20
// output is 10
console.log(val1);

// Terniary operater

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80"); //terniary operater used for sortcut if else.
;


