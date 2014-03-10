describe("Yard", function() {
    var mile1;
    var yard1760;
    var yard1761;
    var yard3;
    var yard4;

    beforeEach(function() {
        mile1 = LengthModule.factory("Mile", 1);
        yard1760 = LengthModule.factory("Yard", 1760);
        yard1761 = LengthModule.factory("Yard", 1761);
        yard3 = LengthModule.factory("Yard", 3);
        yard4 = LengthModule.factory("Yard", 4);
    });

    it("should be equal when 1 mile to 1760 yard", function() {
        expect(mile1.getMetaLength()).toEqual(yard1760.getMetaLength());
    });

    it("should be equal when 3 yard to 3 yard", function() {
        expect(yard3.getMetaLength()).toEqual(yard3.getMetaLength());
    });

    it("should not be equal when 1 mile to 1761 yard", function() {
        expect(mile1.getMetaLength()).not.toEqual(yard1761.getMetaLength());
    });

    it("should not be equal when 3 yard to 4 yard", function() {
        expect(yard3.getMetaLength()).not.toEqual(yard4.getMetaLength());
    });
});