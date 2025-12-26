// singleton

const tinderUser = new Object(); //tihs is a sigleton object.

const tinderUsers = {}; // this is multiple object.

tinderUsers.id = "12324wr";
tinderUsers.name = "khemraj";
tinderUsers.isLoggedIn = false;
console.log(tinderUsers);

const regularUser = {
  email: "khemraj@gmail.com",
  fullName: {
    userfullName: {
      firstName: "khemraj",
      lastName: "saud",
    },
  },
};
console.log(regularUser);
console.log(regularUser.fullName.userfullName);

const obje1 = {
  1: "2",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
const obj4 ={
    5: "e",
    6: "f"
}

const obj3 = Object.assign({}, obje1,obj2); // merging tow objects.
console.log(obj3);


const obj5 = {...obj2, ...obj4} // merging multiple objects using spread operator.
console.log(obj5);



const users = [
    {
        id: 1,
        email: "user1@gmail.com",
    },
    {
        id: 2,
        email: "user2@gmail.com",
    },
    
    {
        id: 3,
        email: "user3@gmail.com",
    },
    
    {
        id: 4,
        email: "user4@gmail.com",
    },
    
]

console.log(tinderUsers);
console.log(Object.keys(tinderUsers)); //  show all key only 
console.log(Object.values(tinderUsers)); // show all values only
console.log(Object.entries(tinderUsers)); // show all key and values in array form.

console.log(tinderUsers.hasOwnProperty("isLoggedIn")); // check the property is available or not . if abailable show true and not show false.

const course = {
     courseName: " js in nepali",
     price: "999",
     courseInstructor: "khemraj saud",
     
}

const {courseInstructor : instructure} = course; //
// console.log(courseInstructor); 


console.log(instructure);



