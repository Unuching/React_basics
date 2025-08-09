const nums = [5, 10, 15, 20, 25];


function numIncrement(num){
    return num+5
}
let incrementedNum = nums.map(numIncrement)
//console.log(incrementedNum);


const orders = [
  {
    id: 1,
    customer: { name: 'Alice', email: 'alice@example.com' },
    items: [
      { product: 'Book', quantity: 2 },
      { product: 'Pen', quantity: 5 },
    ],
  },
  {
    id: 2,
    customer: { name: 'Bob', email: 'bob@example.com' },
    items: [
      { product: 'Laptop', quantity: 1 },
      { product: 'Mouse', quantity: 1 },
    ],
  },
];

console.log(orders.quantity);
