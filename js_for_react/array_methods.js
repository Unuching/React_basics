const members = [
  { member: "Mema", title: "Teacher", isThere: false },
  { member: "Unu", title: "Jobless", isThere: true },
  { member: "Chengcheng", title: "Baby", isThere: true },
  { member: "Maching", title: "Baby2", isThere: true },
];

const memberIDs = members.map((name, index) => `${index + 1}:${name.isThere}`);
//console.log(memberIDs);
const presentMember = members.filter((id) => id.isThere).map((id) => id.title);
console.log(presentMember);
