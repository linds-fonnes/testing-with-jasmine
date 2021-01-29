describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should append tip average next to the name server to #servertable", function () {
    submitServerInfo();
    updateServerTable();
    let addedServerRow = document.querySelectorAll("#serverTable tbody tr td");
    expect(addedServerRow[0].innerText).toEqual("Alice");
    expect(addedServerRow[1].innerText).toEqual("$0.00");
  });

  afterEach(function () {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = "";
  });
});
