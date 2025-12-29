const codding = ["js", "ruby", "java", "python", "cpp"];
const values = codding.forEach((item) => {
  // forEach does't return
  console.log(item); // return array
});
console.log(values); // output is undefined nothing return.

const myNums = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10];
// const newNums = myNums.filter((num)=> num >4)
// console.log(newNums);

const newNumber = myNums.filter((num) => {
  // if use curly bracket. this means scope use and write a return .
  return num > 4;
});
console.log(newNumber);

const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
console.log(newNums);

const books = [
  {
    title: "Book Four",
    genre: "Non-Fiction",
    publish: 1989,
    edition: 2010,
  },
  {
    title: "Book Five",
    genre: "Science",
    publish: 2009,
    edition: 2014,
  },
  {
    title: "Book Six",
    genre: "Fiction",
    publish: 1987,
    edition: 2010,
  },
  {
    title: "Book Seven",
    genre: "History",
    publish: 2010,
    edition: 1996,
  },
  {
    title: "Book Eight",
    genre: "Science",
    publish: 2011,
    edition: 2016,
  },
  {
    title: "Book Nine",
    genre: "Non-Fiction",
    publish: 1981,
    edition: 1989,
  },
];

const userBooks = books.filter((bk)=> bk.publish >2000 && bk.genre === "History")
console.log(userBooks);


