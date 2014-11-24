module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello " + firstName + "," + "\n\n" + message + "\n\nSincerely,\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  var string1 = bigString.substring(startA, endA);
  var string2 = bigString.substring(startB, endB);
  return string1 + string2;
};

module.exports.findFirstMatch = function(text, searchString) {
   var index = text.indexOf(searchString); 
   return index;
};

module.exports.findLastMatch = function(text, searchString) {
  var index2 = text.lastIndexOf(searchString); 
  return index2;

};
module.exports.substringBetweenMatches = function(text, searchString) {
  var lengthString = searchString.length; 
  var first = text.indexOf(searchString); 
  var last = text.lastIndexOf(searchString);
  var str = text.substring(first + lengthString, last);
  return str;
};