const imgBx = document.querySelectorAll(".imgBx");

imgBx.forEach((image) =>
  image.addEventListener("click", () => {
    image.classList.toggle("active");
  })
);
