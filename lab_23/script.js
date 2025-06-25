const box = document.getElementById("box");
const colorPicker = document.getElementById("colorPicker");

colorPicker.addEventListener("input", function() {
   box.style.backgroundColor = colorPicker.value;
});