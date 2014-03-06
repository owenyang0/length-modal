// var Convert = require("./Convert");

var Mile = function(mile) {
  this.mile = mile;
  BaseLength.apply(this, arguments);
}

Mile.prototype = Object.create(BaseLength.prototype);
Mile.prototype.constructor = Mile;

Mile.prototype.getMetaLength = function() {
  return this.mile * Convert.MILE_TO_INCH;
}

Mile.prototype.addLength = function(lengthClass) {
  var metaLength = (this.getMetaLength() + lengthClass.getMetaLength());
  this.mile = metaLength / Convert.MILE_TO_INCH;
  return metaLength;
}