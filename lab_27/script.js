const navTabs = document.getElementById("navTabs");
const content = document.getElementById("content");

navTabs.addEventListener("click", function(event) {
   if (event.target.classList.contains("tab")) {
      const selectedTab = event.target.getAttribute("data-tab");

      switch (selectedTab) {
         case "home":
            content.textContent = "Ви на Головній сторінці";
         break;
         case "about":
            content.textContent = "Це інформація Про нас";
         break;
         case "contact":
            content.textContent = "Контактна інформація тут";
         break;
      default:
        content.textContent = "Оберіть вкладку";
   }
   }
});