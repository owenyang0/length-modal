describe("Add different length measure", function() {
    it("should equal 2 Feet when 13 Inch plus 11 inch", function() {
        var inchPlused = LengthModule.factory("Inch", 13).addLength(LengthModule.factory("Inch", 11));
        expect(inchPlused).toEqual(LengthModule.factory("Feet", 2).getMetaLength());
    });

    it("should equal 3 yard when 3 feet plus 2 yard", function() {
        var inchPlused = LengthModule.factory("Feet", 3).addLength(LengthModule.factory("Yard", 2));
        expect(inchPlused).toEqual(LengthModule.factory("Yard", 3).getMetaLength());
    })
})