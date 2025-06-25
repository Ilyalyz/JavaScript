const selectElement = document.getElementById("languageSelect");
const output = document.getElementById("output");

selectElement.addEventListener("change", function() {
   const selectedValue = selectElement.value;

   if (selectedValue === "ua") {
      output.textContent = "Ви обрали: Українська";
   } else if (selectedValue === "en") {
      output.textContent = "You selected: English";
   }
});