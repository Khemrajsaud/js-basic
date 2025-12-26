// function addTwoNumbers (num1,num2){

//     console.log(num1+num2);

// };

function addTwoNumbers(num1, num2) {
  // let result = num1+num2;
  // console.log("khemraj");
  //return result;

  return num1 + num2;
}
const result = addTwoNumbers(5, 7);
console.log("result:", result);

function loginUserMessage(username = "sam") {

    // if(username === undefined){
    //     console.log("Please enter username");
    //     return
        
    // }
// both are same
     if(!username){
        console.log("Please enter username");
        return
        
    }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("khemraj"));

console.log(loginUserMessage("khemraj"));



function calculateCartPrice(valu1,val2, ...num1){ //rest operator to use array data type provided in function parameter
    return num1
}
console.log(calculateCartPrice(200,300,400,500,600)
);


const users = {
    username: "khemraj",
    price: 3000,

}
function priceObject(userobj){
    console.log(`username is ${userobj.username} and price is ${userobj.price}`);
    

}

// priceObject(users)

priceObject({username: "sam", price: 5999}); //directly passing object in function parameter

const myNewArray = [1,3,4,5,6];

function arrayfunction(getArray){
    return getArray[0]; // accessing first element of array.
}
console.log("array is:", arrayfunction(myNewArray));


