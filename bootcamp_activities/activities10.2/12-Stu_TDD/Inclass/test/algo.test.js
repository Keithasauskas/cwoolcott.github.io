const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method 
    // should take a string as an argument and return a new reversed version of the string
    it("should reverse a string", () => {

      const algo = new Algo;

      const testStr = "GREENEGGS";
      const reveresedStr = "SGGENEERG";

      const result = algo.reverse(testStr);

      expect(result).toEqual(reveresedStr);
    })
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("String is the same forward and backwards", () => {
      const algo = new Algo;

      const testStr = "RADAR";

      const result = algo.isPalindrome(testStr);

      expect(result).toBeTruthy() //toEqual(true)

    });
    it("String is the NOT same forward and backwards", () => {
      const algo = new Algo;

      const testStr = "NOTRADAR";

      const result = algo.isPalindrome(testStr);

      expect(result).toBeFalsy() //toEqual(false)

    })
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it("First Letters Should be capitalized", () => {
      const algo = new Algo;

      const testStr = "quick brown fox";
      const capitalizedStr = "Quick Brown Fox";

      const result = algo.capitalize(testStr);

      expect(result).toEqual(capitalizedStr);
    });
  });
});
