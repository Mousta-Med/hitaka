// burger menu
const openMenu = document.querySelector(".ico-list");
const navBar = document.querySelector(".new-navbar");
const closeMenu = document.querySelector(".close-ico");

openMenu.onclick = () => {
  navBar.classList.add("active");
};
closeMenu.onclick = () => {
  navBar.classList.remove("active");
};

// filter
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

filters.forEach((filter) => {
  filter.addEventListener("click", switchClass);
  filter.addEventListener("click", switchFood);
});

function switchClass() {
  filters.forEach((filter) => {
    filter.classList.remove("place");
    this.classList.add("place");
  });
}

function switchFood() {
  cards.forEach((card) => {
    card.style.display = "none";
  });
  document.querySelectorAll(this.dataset.lqas).forEach((element) => {
    element.style.display = "block";
  });
}
// cart
const openCart = document.querySelector(".cart");
const cart = document.querySelector(".shopping-cart");
const closeCart = document.querySelector("#close-cart");

openCart.onclick = () => {
  cart.classList.add("active");
};

closeCart.onclick = () => {
  cart.classList.remove("active");
};
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantiyChanged);
  }
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}
function buyButtonClicked() {
  alert("Your Order is Placed");
  var cartContent = document.getElementsByClassName("cart-content")[0];

  location.reload();
  updatetotale();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotale();
}
function quantiyChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotale();
}
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement.parentElement;
  var shopProducts2 = button.parentElement.parentElement.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts2.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updatetotale();
}
function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("you have already add this item to cart");
      return;
    }
  }
  var cartBoxContent = `
          <img src="${productImg}" alt="" class="cart-img">
          <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
          </div>
          <i class="bi bi-trash cart-remove"></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantiyChanged);
}
function updatetotale() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}
