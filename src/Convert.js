// module.exports.Convert = Convert;

if (typeof Convert === "undefined") {
    var Convert = {};
    Convert.INCH_TO_INCH = 1,
    Convert.FEET_TO_INCH = 12,
    Convert.YARD_TO_FEET = 3,
    Convert.YARD_TO_INCH = Convert.YARD_TO_FEET * Convert.FEET_TO_INCH,
    Convert.MILE_TO_YARD = 1760,
    Convert.MILE_TO_INCH = Convert.MILE_TO_YARD * Convert.YARD_TO_INCH;
}

if (typeof ConvertToInch === "undefined") {
    var ConvertToInch = {};
    ConvertToInch.Feet = Convert.FEET_TO_INCH;
    ConvertToInch.Yard = Convert.YARD_TO_INCH;
    ConvertToInch.Mile = Convert.MILE_TO_INCH;
    ConvertToInch.Inch = Convert.INCH_TO_INCH;
};