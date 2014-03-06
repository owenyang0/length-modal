describe("Print", function() {
    it("should 1 feet 1 inch when input 13 inch", function() {
        var printMsg = LengthModule.factory("Inch", 13).getPrintMessage();
        expect(printMsg).toEqual("1 feet 1 inch");
    });

    it("should 1 mile 1 feet when input 5281 feet", function() {
        var printMsg = LengthModule.factory("Feet", 5281).getPrintMessage();
        expect(printMsg).toEqual("1 mile 1 feet");
    });

    it("should 1 mile 1 feet 1 inch when input 1760 yard plus 13 inch", function() {
        var yardObj = LengthModule.factory("Yard", 1760);
        yardObj.addLength(LengthModule.factory("Inch", 13));
        var printMsg = yardObj.getPrintMessage();

        expect(printMsg).toEqual("1 mile 1 feet 1 inch");
    });
});

describe("Print Only Inch", function() {
    it("should return 14 inch when input 1 feet and 2 inch", function() {
        var feetObj = LengthModule.factory("Feet", 1);
        feetObj.addLength(LengthModule.factory("Inch", 2));
        var printMsg = feetObj.getPrintMessage(true);

        expect(printMsg).toEqual("14 inch");
    });

    it("should return 14 inch when input 1 feet and 2 inch", function() {
        var printMsg = LengthModule.factory("Yard", 1).getPrintMessage(true);
        expect(printMsg).toEqual("36 inch");
    });
})