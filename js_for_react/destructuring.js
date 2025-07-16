const peoples = [
  { id: "a1", description: "A school teacher" },
  { id: "a2", description: "A bank worker" },
  { id: "b1", description: "A clerk" },
  { id: "b2", description: "A office helper" },
];

const [a, b, ...c] = peoples;
console.log(c);
