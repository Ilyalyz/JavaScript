function createCounter(start = 0, step = 1) {
   let count = start;

   return function() {
      const current = count;
      count += step;
      return current;
   };
}

const counter = createCounter(1, 10);

console.log(counter());
console.log(counter());
console.log(counter());