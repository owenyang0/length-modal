describe("Mile", function() {
    var mile3;
    var mile2;
    var mile4;

    beforeEach(function() {
        mile3 = LengthModule.factory("Mile", 3);
        mile2 = LengthModule.factory("Mile", 2);
        mile4 = LengthModule.factory("Mile", 4);
    });

    it("should be equal when 3 mile to 3 mile", function() {
        expect(mile3.getMetaLength()).toEqual(mile3.getMetaLength());
    });

    it("should not be equal when 3 mile to 2 mile", function() {
        expect(mile3.getMetaLength()).not.toEqual(mile2.getMetaLength());
    });

    it("should not be equal when 3 mile to 4 mile", function() {
        expect(mile3.getMetaLength()).not.toEqual(mile4.getMetaLength());
    });
});