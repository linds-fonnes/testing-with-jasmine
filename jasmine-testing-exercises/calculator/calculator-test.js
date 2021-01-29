it("should calculate the monthly rate correctly", function () {
  const values = { amount: 500, years: 12, rate: 7 };
  expect(calculateMonthlyPayment(values)).toEqual("5.14");
});

it("should return a result with 2 decimal places", function () {
  const values = { amount: 493, years: 10, rate: 4.9 };
  expect(calculateMonthlyPayment(values)).toEqual("5.20");
});

/// etc
