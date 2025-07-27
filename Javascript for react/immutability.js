const myFamily = ["Unuching", "Mrachingnu"]

//myFamily.push("chengcheng")

const newFamily = [...myFamily, "Chengcheng"] // pushing new item using spread operator

//console.log(newFamily);
const otherName = myFamily.map((name)=> name === "Mrachingnu"? "Mema": name)

console.log(otherName);
