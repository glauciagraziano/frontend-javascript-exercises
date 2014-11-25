module.exports.equalStrings = function(stringOne, stringTwo) {
  if (stringOne == stringTwo) {
    return true;
  } else {
    return false;
  }
};


module.exports.notEqual = function(one, two) {
  if (one === two) {
    return false;
  } else {
    return true;
  }
};

module.exports.inBetween = function(lower, middle, upper) {
  if (middle > lower && middle < upper) { 
    return true;
  } else {
    return false;
  }
};

module.exports.outsideRanges = function(number) {
  if (number >= 10 && number <= 20) {
    return false;
  }
  if (number > 42 && number <= 75)  {
    return false;
  }
  if (number > 1 && number < 6) {
    return false;
  } 
  else {
       return true; 
  }
};

module.exports.nameAndPrice = function(name, price) {
  if (name == 'NYTimes' && price >= 1) {
    return true;
  }
  if (name == 'LATimes' && price >= 1) {
    return true;
  }
  else {
    return false;
  }
};
