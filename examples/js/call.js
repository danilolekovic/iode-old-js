/* Generated by Stripes v0.0.3 */
'use strict';

var sum = function() {
  var retval = 0;
  var len = arguments.length;
  for (var i = 0; i < len; i++) {
    retval += arguments[i];
  }
  return retval;
};
var CelciusToFahrenheit = function(c) {
  return c * 1.8 + 32;
};
var FahrenheitToCelcius = function(f) {
  return (f - 32) * 5 / 9;
};
var KilogramsToPounds = function(kg) {
  return kg * 2.20462;
};
var PoundsToKilograms = function(pounds) {
  return pounds / 2.20462;
};
var LitresToGallons = function(lit, type) {
  if (type !== null && type !== undefined) {
    return lit * 0.26417;
  }
  switch (type) {
    case "liquid":
      return lit * 0.26417;
      break;
    case "dry":
      return lit * 0.22702;
      break;
    case "uk":
      return lit * 0.21997;
      break;
    default:
      return lit * 0.26417;
  }
};
var LitresToGallons = function(gal, type) {
  if (type !== null && type !== undefined) {
    return gal / 0.26417;
  }
  switch (type) {
    case "liquid":
      return gal / 0.26417;
      break;
    case "dry":
      return gal / 0.22702;
      break;
    case "uk":
      return gal / 0.21997;
      break;
    default:
      return gal * 0.26417;
  }
};
var Parallel = function(func, callback) {
  setTimeout(function() {
    func();
    if (callback) {
      callback();
    }
  }, 0);
};

function Vector2D(x, y) {
  this.x = x;
  this.y = y;
  this.toString = function() {
    return "(" + x + ", " + y + ")";
  }
}

function Vector3D(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.toString = function() {
    return "(" + x + ", " + y + ", " + z + ")";
  }
}
console.log("yay");
console.log("isn't this cool??");