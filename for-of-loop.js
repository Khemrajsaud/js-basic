// for of

const arr = [1,2,3,4,5]

for( const num of arr){
    console.log(num);
    
}


const greetings = "hello world";
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
    
}

//maps
const map = new Map();
map.set('NEP', "India")
map.set('USA', "united States of america")
map.set('Fr', "france")
map.set('IN', "India")
map.set('IN', "India")
console.log(map);

for(const [key, value] of map){
    console.log(key, ':', value);
    
}


// const myObject = {
//     'Game1': 'NFS',
//     'game2': 'SpiderMan'
// }

// for(const [key, value] of myObject){
//     console.log(key, ':' ,value);
    
// }

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    py: "python"
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming){
    console.log(programming[key]);
    
}

const newmap = new Map();
map.set('NEP', "India")
map.set('USA', "united States of america")
map.set('Fr', "france")
map.set('IN', "India")
map.set('IN', "India")


for(const key in newmap){
    console.log(key);
    
}