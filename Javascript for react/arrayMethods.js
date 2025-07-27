let myPeople = [
  { name: 'Unuching marma', title: 'Senior', age: 33 },
  { name: 'Martina Chakma', title: 'Junior', age: 30 },
  { name: 'Rikon Chakma', title: 'Assistant', age: 20 },
];

const titles = myPeople.map((t, i) => ` ${i+1}. ${t.name}, ${t.title}`);
console.log(titles);
 