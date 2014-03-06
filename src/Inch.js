var Inch = function(inch) {
  this.inch = inch;
  BaseLength.apply(this, arguments);
}

Inch.prototype = Object.create(BaseLength.prototype);
Inch.prototype.constructor = Inch;

Inch.prototype.getMetaLength = function() {
  return this.inch;
}

Inch.prototype.addLength = function(lengthClass) {
  this.inch = (this.getMetaLength() + lengthClass.getMetaLength());
  return this.inch;
}