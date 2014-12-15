module.exports.stream = function(conditionalFn, actionFn) {
  while (conditionalFn()) {
    actionFn();
  }
};

module.exports.sumNumbers = function(array) {
  var counter=0;
  var sum = 0;
  while (counter < array.length ) {
    sum += array[counter];
    counter ++;
  }
  return sum;
};

