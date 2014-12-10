module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var createCourse = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  }
  return createCourse;
};

module.exports.addProperty = function(object, newProp, newValue) {
  if (!object.hasOwnProperty(newProp)) {  
    object[newProp] = newValue;
  } 
  return object;
};

module.exports.formLetter = function(letter) {
  var letterStr = "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
  return letterStr;
  
};

module.exports.canIGet = function(item, money) {
  var canIget = {
    item: money
  };
   if (item === "MacBook Air" && money >= 999) {
    return true;
  }
  else if (item === "MacBook Pro" && money >= 1299) {
    return true; 
  }
  else if (item === "Mac Pro" && money >= 2499) {
    return true; 
  }
  else if (item === "Apple Sticker" && money >= 1) {
    return true;
  }
  else {
    return false;
  }
};
