const prices = [222, 344, 464, 4345, 334];

const totalPrice = prices.reduce((t, num) => t + num, 0);
//console.log(totalPrice);

let myPeople = [
  { name: 'Unuching marma', title: 'Senior', age: 33, ispresent: true },
  { name: 'Martina Chakma', title: 'Junior', age: 30, ispresent: true },
  { name: 'Rikon Chakma', title: 'Assistant', age: 20, ispresent: false },
];

const totalCharacter = myPeople.reduce(
  (total, people) => total + people.name.length,0
);

console.log(totalCharacter);
