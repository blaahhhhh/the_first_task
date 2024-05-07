const sumEvenNum = require("./sumEvenNum");
describe("sumEvenNum tests", () => {
  test("0,10", () => {
    expect(sumEvenNum(0, 10)).toBe(6);
  });
  test("0,25", () => {
    expect(sumEvenNum(0, 25)).toBe(60);
  });
  test("-15,10", () => {
    expect(sumEvenNum(-15, 10)).toBe(-12);
  });
});
