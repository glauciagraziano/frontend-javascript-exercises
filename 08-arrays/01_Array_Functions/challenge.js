module.exports.reversePlusOne = function(arg1) {
  arg1.reverse(); 
  arg1.unshift(1);
  return arg1;

};

module.exports.plusesEverywhere = function(arg1) {
  var stringOfArray = arg1.join('+');
  return stringOfArray;
  
};

module.exports.arrayQuantityPlusOne = function(arg1) {
  var length = arg1.length;
  return length + 1;
  
};
