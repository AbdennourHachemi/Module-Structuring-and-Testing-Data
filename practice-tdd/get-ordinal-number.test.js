import { getOrdinalNumber } from "./get-ordinal-number.js";

// In this week's prep, we started implementing getOrdinalNumber.
// Continue testing and implementing getOrdinalNumber for additional cases.
// Write your tests using Jest — remember to run your tests often for continual feedback.
// To ensure thorough testing, we need broad scenarios that cover all possible cases.
// Listing individual values, however, can quickly lead to an unmanageable number of test cases.
// Instead of writing tests for individual numbers, consider grouping all possible input values
// into meaningful categories. Then, select representative samples from each category to test.
// This approach improves coverage and makes our tests easier to maintain.

// ---------- Normal rules (decided by the last digit) ----------

// Category 1: ends in 1 (not 11) -> "st"
test("should append 'st' for numbers ending in 1, except those ending in 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(101)).toEqual("101st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

// Category 2: ends in 2 (not 12) -> "nd"
test("should append 'nd' for numbers ending in 2, except those ending in 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(32)).toEqual("32nd");
  expect(getOrdinalNumber(102)).toEqual("102nd");
  expect(getOrdinalNumber(452)).toEqual("452nd");
  expect(getOrdinalNumber(862)).toEqual("862nd");
});

// Category 3: ends in 3 (not 13) -> "rd"
test("should append 'rd' for numbers ending in 3, except those ending in 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(43)).toEqual("43rd");
  expect(getOrdinalNumber(103)).toEqual("103rd");
  expect(getOrdinalNumber(183)).toEqual("183rd");
  expect(getOrdinalNumber(823)).toEqual("823rd");
});

// Category 4: ends in 4, 5, 6, 7, 8 or 9 -> "th"
test("should append 'th' for numbers ending in 4, 5, 6, 7, 8 or 9", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(14)).toEqual("14th");
  expect(getOrdinalNumber(19)).toEqual("19th");
  expect(getOrdinalNumber(25)).toEqual("25th");
  expect(getOrdinalNumber(656)).toEqual("656th");
  expect(getOrdinalNumber(1007)).toEqual("1007th");
  expect(getOrdinalNumber(638398)).toEqual("638398th");
  expect(getOrdinalNumber(34454559)).toEqual("34454559th");
});

// Category 5: ends in 0 -> "th"
test("should append 'th' for numbers ending in 0", () => {
  expect(getOrdinalNumber(0)).toEqual("0th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(20)).toEqual("20th");
  expect(getOrdinalNumber(100)).toEqual("100th");
  expect(getOrdinalNumber(1000)).toEqual("1000th");
});

// ---------- Exception (decided by the last TWO digits) ----------

// Category 6: ends in 11, 12 or 13 -> "th"
test("should append 'th' for numbers ending in 11, 12 or 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(113)).toEqual("113th");
  expect(getOrdinalNumber(1011)).toEqual("1011th");
  expect(getOrdinalNumber(3112)).toEqual("3112th");
  expect(getOrdinalNumber(4813)).toEqual("4813th");
});
