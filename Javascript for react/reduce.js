const prices = [222, 344, 464, 4345, 334];

const totalPrice = prices.reduce((t, num) => t + num, 0);
console.log(totalPrice);
