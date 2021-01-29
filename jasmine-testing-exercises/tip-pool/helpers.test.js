describe("helpers tests with setup & teardown", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
    submitPaymentInfo();
  });

  it("should return the sum of the bills & the sum of the tips", function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    expect(sumPaymentTotal("tipAmt")).toEqual(30);
    expect(sumPaymentTotal("billAmt")).toEqual(200);
  });

  it("should return the percentage that the tip was of the bill", function () {
    submitPaymentInfo();
    expect(calculateTipPercent(100, 10)).toEqual(10);
    expect(calculateTipPercent(1150, 55)).toEqual(5);
  });

  it("should append a new td to paymentTbody with bill/tip amount", function () {
    let testTr = document.createElement("tr");
    appendTd(testTr, "testing");
    expect(testTr.hasChildNodes()).toBeTrue();
  });

  it("add the new delete button to tr", function () {
    let newTr = document.createElement("tr");
    addDeleteButton(newTr);
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("x");
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
  });
});
