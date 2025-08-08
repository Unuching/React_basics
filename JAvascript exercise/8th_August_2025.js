const myNumbers = [1, 2, 3, 4, 5];

let labeledNumbers = myNumbers.map((num) => {
  return `Number: ${num}`;
});
//console.log(labeledNumbers);

const myNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let labelNums = myNumberArray
  .filter((even) => {
    return even % 2 === 0;
  })
  .map((newNum) => {
    return `Number:${newNum}`;
  });
//console.log(labelNums);


const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 15 },
];

let adultUsers = users.filter((user)=>{
    return user.age >= 18
}).map((newUser)=>{
    return `${newUser.name} is ${newUser.age} years old.`
})

console.log(adultUsers);

