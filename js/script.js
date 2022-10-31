// burger menu
const openMenu = document.querySelector(".ico-list");
const navBar = document.querySelector(".new-navbar");
const closeMenu = document.querySelector(".close-ico");

openMenu.onclick = () => {
    navBar.classList.add("active");
  };
  
  closeMenu.onclick = () =>{
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

closeCart.onclick = () =>{
  cart.classList.remove("active");
};
