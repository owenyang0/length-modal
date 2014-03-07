var Yard = function(yard) {
    this.yard = yard;
}

Yard.prototype = Object.create(BaseLength.prototype);
Yard.prototype.constructor = Yard;

Yard.prototype.getMetaLength = function() {
    return this.yard * Convert.YARD_TO_INCH;
}

// Yard.prototype.getMetaLength = function(Convert.YARD_TO_INCH) {
//     // return this.yard * Convert.YARD_TO_INCH;
//     return super()
// }

Yard.prototype.addLength = function(lengthInstance) {
    var metaLength = (this.getMetaLength() + lengthInstance.getMetaLength());
    this.yard = metaLength / Convert.YARD_TO_INCH;
    return metaLength;
}