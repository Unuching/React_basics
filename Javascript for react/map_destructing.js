// Create a Map
const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
]);

// Destructing
let text = '';
for (const [key, value] of fruits) {
  text += key + ' is ' + value + '. ';
}

//console.log(text);

const family = new Map([
  ['Husband', 'Unu'],
  ['Wife', 'Mema'],
  ['Kid', 'Chengchengnu'],
]);

let myFamily = '';

for (let [a, b] of family) {
  myFamily += a + ' is ' + b + '. ';
}
console.log(myFamily);
