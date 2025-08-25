const reverse = (string) => {
  return string.split("").reverse().join("");
};

const average = (array) => {
  if (array.length === 0) return 0;
  const reducer = (sum, item) => {
    return sum + item;
  };

  return array.reduce(reducer, 0) / array.length;
};

console.log(average([4, 5, 6]));

module.exports = {
  reverse,
  average,
};
