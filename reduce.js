const myNums = [1,2,3]

// const myTotal = myNums.reduce (function (acc, current){
//     console.log(`acc: ${acc} and current: ${current}`);
    
//     return acc + current
// },0)
// console.log(myTotal);


const myTotal = myNums.reduce((acc,curr)=> acc+curr , 0)
console.log(myTotal);


const sappingCard = [
    {
        itemName : "js course",
        price: 2099
    },
     {
        itemName : "python",
        price: 2000
    },
     {
        itemName : "ai",
        price: 2555
    },
]

const totalCartPrice = sappingCard.reduce((acc, item)=> acc+item.price, 0)
console.log(totalCartPrice);
