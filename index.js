const slider = document.querySelector(".slider");
const price = document.querySelector(".price");

slider.addEventListener("input", function () {
  price.textContent = "$" + parseFloat(slider.value).toFixed(2);
});
