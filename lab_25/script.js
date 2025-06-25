const text = document.getElementById("text");
const button = document.getElementById("changeStyleBtn");

button.addEventListener("click", function() {
  text.style.color = "white";
  text.style.backgroundColor = "darkblue";
  text.style.padding = "10px";
  text.style.borderRadius = "5px";
});