const countPositivNum = (ar) => {
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > 0) {
      count = count + 1;
    }
  }
  return count;
};
module.exports = countPositivNum;
