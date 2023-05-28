// select HtML elements

const input = document.getElementById("range-slider");
const pageviews = document.querySelector(".pageviews");
const price = document.querySelector("#price");
const price2 = document.querySelector("#price2");
const checkbox = document.getElementById("checkbox");
const pageViewsValues = ["10k", "50k", "100k", "500k", "1M"];
const priceRanges = [8, 12, 16, 24, 36];
let yearlyDiscountApplied = false;

// input event
input.addEventListener("input", function () {
  pageviews.textContent = pageViewsValues[input.value];
  updatePrice();

  //   let value = input.value * 25;
  input.style.background = `linear-gradient(to right,
            hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${input.value * 25}% ,
            hsl(224, 65%, 95%) 0%,
            hsl(224, 65%, 95%) 100%)`;
});

// checkbox
checkbox.addEventListener("change", function () {
  if (!yearlyDiscountApplied) {
    yearlyDiscountApplied = true;
  } else {
    yearlyDiscountApplied = false;
  }
  updatePrice();
});

// price update in real time
function updatePrice() {
  if (yearlyDiscountApplied) {
    price.textContent = priceRanges[input.value] * 0.75;
    price2.textContent = priceRanges[input.value] * 0.75;
  } else {
    price.textContent = priceRanges[input.value];
    price2.textContent = priceRanges[input.value];
  }
}
