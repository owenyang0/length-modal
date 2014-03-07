var Feet = function(feet) {
  this.feet = feet;
}

Feet.prototype = Object.create(BaseLength.prototype);
Feet.prototype.constructor = Feet;

Feet.prototype.getMetaLength = function() {
  return this.feet * Convert.FEET_TO_INCH;
}

Feet.prototype.addLength = function(lengthClass) {
  var metaLength = (this.getMetaLength() + lengthClass.getMetaLength());
  this.feet = metaLength / Convert.FEET_TO_INCH;
  return metaLength;
}