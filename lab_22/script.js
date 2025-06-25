const title = document.getElementById("myTitle");

title.addEventListener("mouseover", function() {
  title.style.color = "blue";
});

title.addEventListener("mouseout", function() {
  title.style.color = "black";
});