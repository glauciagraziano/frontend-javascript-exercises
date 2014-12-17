module.exports.sumNumbers = function(newArray) {
  var sum = 0;
  for (var counter = 0; counter < newArray.length; counter++ ) { 
    sum += newArray[counter];
  }
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
  var re = /\s*,\s*/;
  var newArray = [];
  var arrayOfStrings = inputString.split(re);
  for (var counter = 0; counter < arrayOfStrings.length; counter++ ) {
    newArray.push(arrayOfStrings[counter].toLowerCase());
  }
  return newArray;
};

module.exports.addIndex = function(inputData) {
  var newArray = [];
  for (var counter = 0; counter < inputData.length; counter++) {
    newArray.push([counter] + " is "+ inputData[counter]);
  }
  return newArray;
};
