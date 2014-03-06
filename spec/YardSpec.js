describe("Yard", function() {
  var mile1;
  var yard1760;
  var yard1761;
  var yard3;
  var yard4;

  beforeEach(function() {
    mile1 = new Mile(1);
    yard1760 = new Yard(1760);
    yard1761 = new Yard(1761);
    yard3 = new Yard(3);
    yard4 = new Yard(4);
  });

  // it("should be able return meta length", function() {
  //   var length1 = mile1.getMetaLength();
  //   var length1760 = yard1760.getMetaLength();
  //   var length1761 = yard1761.getMetaLength();
  //   var length4_1760 = yard4.getMetaLength();
  //   expect(length1).toEqual(1);
  //   expect(length1760).toEqual(1760);
  //   expect(length1761).toEqual(1761);
  //   expect(length4_1760).toEqual(4*1760);
  // });

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