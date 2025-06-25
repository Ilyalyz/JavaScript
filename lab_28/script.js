const products = document.getElementById("products");
const wishList = document.getElementById("wishList");
let savedList = JSON.parse(localStorage.getItem("wishList")) || [];

function renderWishList() {
   wishList.innerHTML = "";
   savedList.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.name;
      wishList.appendChild(li);
   });
}

renderWishList();
products.addEventListener("click", function(event) {
   if (event.target.classList.contains("add-btn")) {
      const li = event.target.closest("li");
      const productId = li.getAttribute("data-id");
      const productName = li.firstChild.textContent.trim();

   if (!savedList.find(item => item.id === productId)) {
      savedList.push({ id: productId, name: productName });
      localStorage.setItem("wishList", JSON.stringify(savedList));
      renderWishList();
   } else {
      alert("Цей товар вже в wish-list");
   }
   }
});