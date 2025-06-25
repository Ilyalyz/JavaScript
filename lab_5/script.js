for (let i = 1; i <= 20; i++) {
   if (i%2==0)
      console.log(i);
}

let n = 12;
while (n >= 1) {
   console.log(n);
   n--;
}

let k = 34;
do {
   console.log("Введіть позитивне число: ");
} while (k <= 0);
console.log("Ви ввели позитивне число: ", k);

let person = {
   name: "Ілля",
   age: 17,
   city: "Кривий Ріг"
};
for (let key in person) {
   console.log(key, person[key]);
}

let arr = [1, 2, 3, 'apple', 'banana'];
let reversed = arr.reverse(); 
for (let num of reversed) {
   console.log(num);
}

let array_numbers = [22, 49, 70, 21, 4, 61, 33, 87];
array_numbers.forEach(num => console.log(num));
let map_res = array_numbers.map(num => num*num);
console.log(map_res);
let big_num = array_numbers.filter(num => num>=10);
console.log(big_num);