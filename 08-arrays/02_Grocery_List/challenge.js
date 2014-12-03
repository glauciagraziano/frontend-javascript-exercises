module.exports.addItem = function(newItem, array) {
  if ( array.indexOf(newItem) == -1 ){
    array.push(newItem);
  }
    return array;
};

module.exports.reverseSortedList = function(array) {
  array.sort();
  array.reverse();
  return array;
};
