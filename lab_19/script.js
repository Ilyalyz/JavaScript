const users = [
   { name: "Ілля", age: 17 },
   { name: "Богдан", age: 19 },
   { name: "Степан", age: 22 }
];
 
const names = users.reduce(function(acc, user) {
   acc.push(user.name);
   return acc;
}, []);
 console.log(names);