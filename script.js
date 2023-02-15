const imgBx = document.querySelectorAll(".imgBx");

imgBx.forEach((image) =>
  image.addEventListener("click", () => {
    image.classList.toggle("active");
  })
);

// function toggleMenu() {
//   var menuToggle = document.querySelector("[data-menu-button]");
//   var navigation = document.querySelector(".navigation");
//   menuToggle.classList.toggle("active");
//   navigation.classList.toggle("active");
// }
