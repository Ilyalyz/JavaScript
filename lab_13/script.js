function deepClone(obj) {
   let clone = { ...obj };
   for (let key in clone) {
      if (typeof clone[key] === 'object' && clone[key] !== null) {
         clone[key] = deepClone(clone[key]);
      }
   }
   return clone;
}

const original = {
   title: "Кніжка",
   info: {
      author: "Хтось",
      year: 2024
   }
};

const copy = deepClone(original);
copy.info.year = 2030;
console.log(original.info.year);
console.log(copy.info.year);