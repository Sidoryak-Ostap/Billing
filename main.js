const prices = {
  1: {
    pageviews: "10K",
    price: 8,
  },
  2: {
    pageviews: "50K",
    price: 12,
  },
  3: {
    pageviews: "100K",
    price: 16,
  },
  4: {
    pageviews: "500K",
    price: 24,
  },
  5: {
    pageviews: "1M",
    price: 36,
  },
};

const rangeSlider = document.getElementById("myRange");
const priceValue = document.querySelector(".price-value");
const pageviews = document.querySelector(".pageviews");
const toggle = document.querySelector(".toggle-btn");

let currentPlan = prices[3];
let isDiscountActive = false;

function updatePrice() {
  let finalPrice = currentPlan.price;

  if (isDiscountActive) {
    finalPrice = finalPrice - finalPrice * 0.25;
  }

  priceValue.textContent = finalPrice.toFixed(2) + "$";
  pageviews.textContent = currentPlan.pageviews + " pageviews";
}

rangeSlider.addEventListener("change", (e) => {
  currentPlan = prices[Math.round(e.target.value / 100)];
  updatePrice();
});

toggle.addEventListener("change", (e) => {
  isDiscountActive = e.target.checked;
  updatePrice();
});

updatePrice();
