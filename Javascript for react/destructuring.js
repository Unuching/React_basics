const person = {
    name: "Unuching Marma",
    age: 32,
    sex: "Male"
}

let {name, sex, age, country= "Bangladesh"} = person

//console.log(name,age,sex)

let c_name = "Bangladesh"

let [a,b,c,d,e,...f] = c_name
//console.log(c_name[7]);
const product = {
    id: "BC-0057",
    category: "Grocery",
    itemRemains: 120,
    price:300
}

let {id, category,itemRemains,price }= product

console.log(id, category, itemRemains, price);
