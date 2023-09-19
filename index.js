const rangeInput = document.getElementById("myRange");
const pageviewsSpan = document.querySelector(".pageviews");
const priceSpan = document.querySelector(".price");
const monthlyBillingCheckbox = document.getElementById("monthly-billing");

function calculatePrice(selectedValue, isMonthlyBillingChecked) {
  let pageviews;
  let price;

  switch (selectedValue) {
    case 1:
      pageviews = "10K pageviews";
      price = isMonthlyBillingChecked ? "$6.00" : "$8.00";
      break;
    case 2:
      pageviews = "50K pageviews";
      price = isMonthlyBillingChecked ? "$9.00" : "$12.00";
      break;
    case 3:
      pageviews = "100K pageviews";
      price = isMonthlyBillingChecked ? "$12.00" : "$16.00";
      break;
    case 4:
      pageviews = "500K pageviews";
      price = isMonthlyBillingChecked ? "$18.00" : "$24.00";
      break;
    case 5:
      pageviews = "1M pageviews";
      price = isMonthlyBillingChecked ? "$27.00" : "$36.00";
      break;
    default:
      pageviews = "";
      price = "$16.00";
  }

  pageviewsSpan.textContent = pageviews;
  priceSpan.textContent = price;
}

rangeInput.addEventListener("input", () => {
  const selectedValue = parseInt(rangeInput.value, 10);
  const isMonthlyBillingChecked = monthlyBillingCheckbox.checked;
  calculatePrice(selectedValue, isMonthlyBillingChecked);
});

monthlyBillingCheckbox.addEventListener("change", () => {
  const selectedValue = parseInt(rangeInput.value, 10);
  const isMonthlyBillingChecked = monthlyBillingCheckbox.checked;
  calculatePrice(selectedValue, isMonthlyBillingChecked);
});
