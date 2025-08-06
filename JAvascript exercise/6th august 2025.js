const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function checkodd(oddNum) {
  return oddNum % 2 !== 0;
}
let oddnums = myNumbers.filter(checkodd);
console.log(oddnums);
