function checkCondition(number, callback) {
   return callback(number);
}

function isEven(n) {
   return n % 2 === 0;
}

console.log(checkCondition(4, isEven));
console.log(checkCondition(7, isEven));