function BaseLength(lengthType, length) {
    this.lengthType = lengthType;
    this.length = length;
}

BaseLength.prototype.measures = {};

BaseLength.prototype.getMetaLength = function() {
    return this.length * ConvertToInch[this.lengthType];
}

BaseLength.prototype.addLength = function(lengthClass) {
    var metaLength = (this.getMetaLength() + lengthClass.getMetaLength());
    this.length = metaLength / ConvertToInch[this.lengthType];
    return metaLength;
}

BaseLength.prototype.getMeasures = function() {
    var metaLength = this.getMetaLength();
    var mile, yard, feet, inch;
    mile = parseInt(metaLength / Convert.MILE_TO_INCH);
    metaLength -= mile * Convert.MILE_TO_INCH;
    yard = parseInt(metaLength / Convert.YARD_TO_INCH);
    metaLength -= yard * Convert.YARD_TO_INCH;
    feet = parseInt(metaLength / Convert.FEET_TO_INCH);
    inch = metaLength -= feet * Convert.FEET_TO_INCH;

    this.measures.mile = mile;
    this.measures.yard = yard;
    this.measures.feet = feet;
    this.measures.inch = inch;

    return this.measures;
}

BaseLength.prototype.getPrintMessage = function(onlyInch) {
    if (onlyInch) {
        var inch = this.getMetaLength();
        return inch + " inch";
    }

    var message = [];
    this.measures = this.getMeasures();

    for (measure in this.measures) {
        var num = this.measures[measure];
        if (num > 0) {
            // message += (num + " " + measure + " ");
            message.push(num);
            message.push(measure);
        }
    }
    return message.join(" ");
}