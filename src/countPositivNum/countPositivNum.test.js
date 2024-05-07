const countPositivNum = require("./countPositivNum");

describe("countPositiveNum tests", () => {
  test("array=[1,2,3,4,0]", () => {
    const array = [1, 2, 3, 4, 0];
    expect(countPositivNum(array)).toBe(4);
  });

  test("array=[1,2,3,4,-1]", () => {
    const array = [1, 2, 3, 4, -1];
    expect(countPositivNum(array)).toBe(4);
  });

  test("array=[1,-2,3,4,-1,9]", () => {
    const array = [1, -2, 3, 4, -1, 9];
    expect(countPositivNum(array)).toBe(4);
  });
});
