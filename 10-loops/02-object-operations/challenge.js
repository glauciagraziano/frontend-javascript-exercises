module.exports.copy = function(object) {
  var newObject = {};
  for (var property in object) {
    newObject[property] = object[property];
  }
  return newObject;
};

module.exports.extend = function(dest, src) {
  for (var property in src) {
    dest[property] = src[property];
  }
  return dest;
};

module.exports.hasElems = function(object, array) {
  // check if array is empty
  if (array.length == 0) {
    return true;
  } else {
     // if array isn't empty read the array
     for (counter =0; counter < array.length; counter++) {
        // check if array element is not  key in the object
         var property = array[counter]; 
         if (!object.hasOwnProperty(property)) {
            return false;
          
         }
   }  

   return true;
  }

};

