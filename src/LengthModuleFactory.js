var LengthModule = {};
LengthModule.Mile = Mile;
LengthModule.Yard = Yard;
LengthModule.Feet = Feet;
LengthModule.Inch = Inch;

LengthModule.factory = function(lengthType, length) {
    return new LengthModule[lengthType](length);
}