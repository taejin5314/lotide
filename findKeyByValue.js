const findKeyByValue = function(shows, value) {
  let result;
  for (const genre in shows) {
    if (value === shows[genre]) result = genre;
  }
  return result;
};

module.exports = findKeyByValue;