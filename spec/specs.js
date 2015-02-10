describe('isUpcase', function() {
  it('returns false if the first letter of string is not uppercase', function() {
    expect(isUpcase("hello")).to.equal(false);
  });

  it('returns true if the first letter of string is uppercase', function() {
    expect(isUpcase("Hello")).to.equal(true);
  });
});


describe('cardFormat', function() {
  it('returns false if the card number entered is not in the proper format', function() {
    expect(cardFormat("9999-9999-9999*9999")).to.equal(false);
  });

  it('returns true if the card number entered is in the proper format', function() {
    expect(cardFormat("9999-9999-9999-9999")).to.equal(true);
  });
});

describe('isEmail', function() {
  it('returns true if the text is in email address format', function() {
    expect(isEmail("me@gmail.com")).to.equal(true);
  });
});
