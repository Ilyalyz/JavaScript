function fetchData() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const errorChance = Math.random();
         if (errorChance < 0.3) {
            reject("Помилка: не вдалося отримати дані");
         }  else {
            resolve("Дані успішно отримані");
         }
      }, 1000);
   });
}

fetchData()
   .then(data => console.log(data))
   .catch(err => console.error(err));