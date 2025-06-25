const today = new Date();
const day = today.getDay();

if (day === 0 || day === 6) {
   console.log("Сьогодні вихідний!");
} else {
   console.log("Сьогодні робочий день.");
}