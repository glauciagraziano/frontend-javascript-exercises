module.exports.newArray = function(var1, var2, var3, var4) {
  var newArray = [var1, var2, var3, var4];
  return newArray;
};

module.exports.firstAndLast = function(var1) {
  //var firstAndLast = var1;
  var last = var1.length - 1;
  var newArray = [var1[0], var1[last]];
  return newArray;
};