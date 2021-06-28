const middle = function(array) {
  const arrLength = array.length;
  if (arrLength < 3) return [];
  else if (arrLength % 2 !== 0) return [array[Math.floor(arrLength / 2)]];
  else return [array[arrLength / 2 - 1], array[arrLength / 2]];
};

module.exports = middle;