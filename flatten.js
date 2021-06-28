const flatten = function(arr) {
  if (arr.length === 0) return arr;
  if (Array.isArray(arr[0])) {
    return flatten(arr[0]).concat(flatten(arr.slice(1)));
  }
  return arr.slice(0, 1).concat(flatten(arr.slice(1)));
};

module.exports = flatten;