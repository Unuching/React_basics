const person = {
    name: "Karim"
}

//console.log(person.adress?.city);// optional chaining

console.log(person.adress?.city ?? "Do not found");// optional chaining and nullish qualescence
