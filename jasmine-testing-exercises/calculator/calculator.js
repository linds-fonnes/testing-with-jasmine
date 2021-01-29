window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 1000, years: 10, rate: 5 };
  const amountEl = document.getElementById("loan-amount");
  amountEl.value = values.amount;
  const yearsEl = document.getElementById("loan-years");
  yearsEl.value = values.years;
  const rateEl = document.getElementById("loan-rate");
  rateEl.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const principle = values.amount;
  const interest = values.rate / 100 / 12;
  const numberOfPayments = values.years * 12;
  return (
    (principle * interest) /
    (1 - Math.pow(1 + interest, -numberOfPayments))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentEl = document.getElementById("monthly-payment");
  monthlyPaymentEl.textContent = monthly;
}
