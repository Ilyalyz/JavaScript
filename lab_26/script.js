const accordion = document.getElementById("accordion");

const contents = accordion.querySelectorAll(".accordion-content");
contents.forEach(content => {
   content.style.display = "none";
});

accordion.addEventListener("click", function(event) {
   if (event.target.classList.contains("accordion-header")) {
      const content = event.target.nextElementSibling;
   if (content.style.display === "block") {
      content.style.display = "none";
   } else {
      content.style.display = "block";
   }
   }
});