describe("Mile", function() {
  var mile3;
  var mile2;
  var mile4;

  beforeEach(function() {
    mile3 = new Mile(3);
    mile2 = new Mile(2);
    mile4 = new Mile(4);
  });

  // it("should be able return meta length", function() {
  //   var length3 = mile3.getMetaLength();
  //   var length2 = mile2.getMetaLength();
  //   var length4 = mile4.getMetaLength();
  //   expect(length3).toEqual(3);
  //   expect(length2).toEqual(2);
  //   expect(length4).toEqual(4);
  // });

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