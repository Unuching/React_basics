const person = {
    name: "Unuching Marma",
    age: 32,
    sex: "Male"
}

let {name, sex, age, country= "Bangladesh"} = person

//console.log(country)

let c_name = "Bangladesh"

let [a,b,c,d,e,...f] = c_name
console.log(c_name[7]);
