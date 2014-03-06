describe("LengthModule", function() {
    it("should equal when 1 yard to 3 feet", function() {
        expect(LengthModule.factory("Yard", 1).getMetaLength())
          .toEqual(LengthModule.factory("Feet", 3).getMetaLength());
    });

    it("should equal when 1 feet to 12 inch", function() {
        expect(LengthModule.factory("Feet", 1).getMetaLength())
          .toEqual(LengthModule.factory("Inch", 12).getMetaLength());
    });
})