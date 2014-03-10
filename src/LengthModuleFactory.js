var LengthModule = {};

LengthModule.factory = function(lengthType, length) {
    return new BaseLength(lengthType, length);
}