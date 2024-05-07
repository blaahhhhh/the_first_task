const minimum = (a, b, c) => {
  let min;
  if (Math.abs(a) < Math.abs(b)) {
    min = a;
  } else {
    min = b;
  }

  if (Math.abs(min) > Math.abs(c)) {
    min = c;
  }
  return min;
};
module.exports = minimum;
