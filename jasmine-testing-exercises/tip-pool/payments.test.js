describe("payments test with setup and teardown", function () {
  beforeEach(function () {
    billAmtInput.value = 50;
    tipAmtInput.value = 5;
  });

  it("should add a curPayment object to allPayments", function () {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments["payment1"].billAmt).toEqual("50");
    expect(allPayments["payment1"].tipAmt).toEqual("5");
    expect(allPayments["payment1"].tipPercent).toEqual(10);
  });

  it("should reset the input value after submit", function () {
    submitPaymentInfo();
    expect(billAmtInput.value.length).toBe(0);
  });

  it("should update the html", function () {
    submitPaymentInfo();
    summaryTds[0].innerText = "50";
    summaryTds[1].innerText = "5";
    summaryTds[2].innerText = 10;
  });

  it("should return undefined with negative or empty inputs", function () {
    billAmtInput.value = "";
    tipAmtInput.value = -5;
    expect(createCurPayment()).toEqual(undefined);
  });

  it("should require positive billAmt but tip can be 0", function () {
    billAmtInput.value = 0;
    tipAmtInput.value = 0;
    expect(createCurPayment()).toEqual(undefined);
    billAmtInput.value = 55;
    tipAmtInput.value = 0;
    expect(createCurPayment()).toBeTruthy();
  });

  it("should create a tablerow element with table data of input values", function () {
    let curPayment = createCurPayment();
    allPayments["payment1"] = curPayment;
    appendPaymentTable(curPayment);
    let td = document.querySelectorAll("#paymentTable tbody tr td");
    expect(td[0].innerText).toEqual("$50");
    expect(td[1].innerText).toEqual("$5");
    expect(td[2].innerText).toEqual("10%");
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
