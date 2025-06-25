let temperature = 40;
if (temperature < 15) {
   console.log("Холодно");
} else if (temperature < 30) {
   console.log("Тепло");
} else console.log("Жарюка");

let num = 7;
let res = (num%2==0) ? "Парне" : "Не парне";
console.log(res);

let day = "вівторок";
switch (day) {
   case "понеділок":
      console.log("Сьогодні понеділок");
      break;
   case "вівторок":
      console.log("Сьогодні вівторок");
      break;
   case "середа":
      console.log("Сьогодні середа");
      break;
   case "четвер":
      console.log("Сьогодні четвер");
      break;
   case "п'ятниця":
      console.log("Сьогодні п'ятниця");
      break;
   case "субота":
      console.log("Сьогодні субота");
      break;
   case "неділя":
      console.log("Сьогодні неділя");
      break;
   default:
      console.log("Не день тижня");
}

let parol = "admin84759";
let user = (parol == "admin123") ? "Доступ дозволено" : "Доступ заборонено"; 
console.log(user);