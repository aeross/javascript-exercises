const add = function(n1, n2) {
  return n1 + n2;
	
};

const subtract = function(n1, n2) {
  return n1 - n2;
	
};

const sum = function(arr) {
  var sumOutput = 0;
  for (var i = 0; i < arr.length; i++) {
    sumOutput += arr[i];
  }
  return sumOutput;
};

const multiply = function(arr) {
  var multOutput = 1;
  for (var i = 0; i < arr.length; i++) {
    multOutput *= arr[i];
  }
  return multOutput;
};

const power = function(n, p) {
  var output = 1;
	while (p > 0) {
    output *= n;
    p--;
  }
  return output;
};

const factorial = function(n) {
  var output = 1;
  while (n > 0) {
    output *= n;
    n--;
  }
	return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
