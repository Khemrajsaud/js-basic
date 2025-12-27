// Immediately Invoked function expressions (IIFE)

(function chai(){ // name iife
    console.log(`DB CONNECTED`);
    
})();

( (name)=> { //non iife
    console.log(` db connected tow ${name}`);
    
}) ('khemraj')