const convertToCelsius = function() {
  var farenheit = arguments[0];
  return Math.round((farenheit - 32) * (50/9)) / 10;
};

const convertToFahrenheit = function() {
  var celcius = arguments[0];
  return Math.round(((celcius * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
