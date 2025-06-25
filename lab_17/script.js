const users = [
   { name: "Ілля" },
   { name: "Богдан" },
   { name: "Степан" }
];

users.forEach(function(user) {
   user.active = true;
});

console.log(users);