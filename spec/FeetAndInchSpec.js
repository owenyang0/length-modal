describe("Feet and Inch", function() {
    it("should equal when 1 yard to 3 feet", function() {
        expect(new Yard(1).getMetaLength()).toEqual(new Feet(3).getMetaLength());
    });

    it("should equal when 1 feet to 12 inch", function() {
        expect(new Feet(1).getMetaLength()).toEqual(new Inch(12).getMetaLength());
    });
})