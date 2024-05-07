const minimum = require("./minimum.js");

describe("minimal function tests", () => {
  test("positive numbers", () => {
    expect(minimum(2, 3, 1)).toBe(1);
  });

  test("test with zero", () => {
    expect(minimum(2, 3, 0)).toBe(0);
  });

  test("test with zero", () => {
    expect(minimum(2, -3, 1)).toBe(1);
  });
});
