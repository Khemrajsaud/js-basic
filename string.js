const name  = "khemraj"
const repoCount = 50

// console.log(name + repoCount + "value"); this is not a good way to concat string;

console.log(`Hello my name is ${name} and my repop count is ${repoCount}`);
// this is mordern way to caonct string using backtick(`)

const gameName = new String("khemraj")
console.log(gameName.length);
console.log(gameName[0]);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4);
console.log(newString);


const anotherString = gameName.slice(-7,2);
console.log(anotherString);

const newStringOne = "   saud   ";
console.log(newStringOne);
console.log(newStringOne.trim());// remove space from both side


const url = "https://khemraj.com/khemraj%20dsif"
console.log(url.replace('%20', '-')); //replace methode replace the value between string.


const userName = "username-user-holder";
console.log(userName.split('-')); // split methode split the string based on give value and return array.










