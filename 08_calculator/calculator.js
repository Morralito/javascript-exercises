const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(...args) {
  return (args[0].length === 0) ? 0 : 
  args[0].reduce((initial, current ) => initial + current);
};

const multiply = function(...args) {
  return args[0].length ? 
  args[0].reduce((initial, current ) => initial * current) : 
  0; 
  ;
};

const power = function(num,pow) {
  return num**pow;
};

const factorial = function(n) {
  return n ? n * factorial(n - 1) : 1;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
