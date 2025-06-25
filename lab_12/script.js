function removeProperties(obj, propsToRemove) {
   let result = {};
   for (let key in obj) {
      if (!propsToRemove.includes(key)) {
         result[key] = obj[key];
      }
   }
   return result;
}

const user = {
   name: "Ілля",
   age: 17,
   password: "втлвоар",
   email: "ілля@gmail.com"
};

const cleanUser = removeProperties(user, ["password", "email"]);
console.log(cleanUser);