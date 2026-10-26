import { getOrdinalNumber } from "./get-ordinal-number.js";

// In this week's prep, we started implementing getOrdinalNumber.

// Continue testing and implementing getOrdinalNumber for additional cases.
// Write your tests using Jest — remember to run your tests often for continual feedback.

// To ensure thorough testing, we need broad scenarios that cover all possible cases.
// Listing individual values, however, can quickly lead to an unmanageable number of test cases.
// Instead of writing tests for individual numbers, consider grouping all possible input values
// into meaningful categories. Then, select representative samples from each category to test.
// This approach improves coverage and makes our tests easier to maintain.

// Case 1: Numbers ending with 1 (but not 11)
// When the number ends with 1, except those ending with 11,
// Then the function should return a string by appending "st" to the number.
test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

// Case 2: Numbers ending with 2 (but not 12)
// When the number ends with 2, except those ending with 12,
// Then the function should return a string by appending "nd" to the number.
test("should append 'nd' for numbers ending with 2, except those ending with 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(32)).toEqual("32nd");
  expect(getOrdinalNumber(72)).toEqual("72nd");
  expect(getOrdinalNumber(452)).toEqual("452nd");
  expect(getOrdinalNumber(862)).toEqual("862nd");
});

// Case 3: Numbers ending with 3 (but not 13)
// When the number ends with 3, except those ending with 13,
// Then the function should return a string by appending "rd" to the number.
test("should append 'rd' for numbers ending with 3, except those ending with 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(43)).toEqual("43rd");
   expect(getOrdinalNumber(93)).toEqual("93rd");
  expect(getOrdinalNumber(823)).toEqual("823rd");
   expect(getOrdinalNumber(183)).toEqual("183rd");
});

// Case 4: Numbers ending with any other number (but not 1,2 or 3)
// When the number ends with 4,5,6 ,7 ,8 or 9 ,
// Then the function should return a string by appending "th" to the number.
test("should append 'th' for numbers ending with 4,5,6 ,7 ,8 or 9 ", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(25)).toEqual("25th");
  expect(getOrdinalNumber(656)).toEqual("656th");
  expect(getOrdinalNumber(1007)).toEqual("1007th");
  expect(getOrdinalNumber(638398)).toEqual("638398th");
  expect(getOrdinalNumber(34454559)).toEqual("34454559th");
});

// Case 5: Numbers ending with 3digit teen expcetions
// When the number ends with ,(111, 112,113)
// Then the function should return a string by appending "th" to the number.
test("should append 'th' for numbers in 100's ending with 11, 12 , 13", () => {
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(113)).toEqual("113th");
});

// Case 6:A test case handling the special cases like 11,12,13,101 & 103

test("should append 'th' for numbers ending with ", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(101)).toEqual("101st");
  expect(getOrdinalNumber(103)).toEqual("103rd");
});
