const countWordsOnK = require("./countWordsOnK");

describe("countWordsOnK tests", () => {
  test("test num. 1", () => {
    expect(countWordsOnK("финик виноград фрукт")).toBe(0);
  });

  test("test num. 2", () => {
    expect(countWordsOnK("киви Киноа ананас")).toBe(2);
  });
});
