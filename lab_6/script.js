let numbers = [3, 5, 3, 7, 5, 3, 8, 7, 5, 8, 8, 8];
let counts = {};

numbers.forEach(function(num) {
   if (counts[num]) {
      counts[num]++;
   } else {
      counts[num] = 1;
   }
});

console.log("Частота зустрічання числа:");
for (let num in counts) {
    console.log(`${num} зустрічається ${counts[num]} раз(и)`);
}