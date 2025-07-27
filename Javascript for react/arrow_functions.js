// Arrow function let us write function in shorter form
let multiply = (a, b) => a * b; // if a function have only one statement an return it, we don't have to use 'return' value

//console.log(multiply(4, 5));

// using parameters

let hello = (val1, val2, val3) => 'hello ' + val1 + val2 + val3;
// if you have one parameter you cal also skip the parenthesis

//console.log(hello('Unuching', 'how Are you', 'hmm, good'));

let mmyself = {
  firstName: 'Unuching',
  lastName: 'Marma',
  id: 436345,
  fullName: function () {
     return this.firstName +' '+ this.lastName;
  },
};

console.log(mmyself.fullName());
