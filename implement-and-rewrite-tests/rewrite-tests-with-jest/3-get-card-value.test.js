import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

test("Number card returns its numeric value", () => {
  expect(getCardValue("2♥")).toEqual(2);
  expect(getCardValue("7♦")).toEqual(7);
  expect(getCardValue("10♣")).toEqual(10);
});

test("Face cards return 10", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});

test("Invalid rank throws an error", () => {
  expect(() => getCardValue("11♠")).toThrow(Error);
  expect(() => getCardValue("X♥")).toThrow(Error);
});

test("Invalid suit throws an error", () => {
  expect(() => getCardValue("A★")).toThrow(Error);
});

test("Invalid format throws an error", () => {
  expect(() => getCardValue("A")).toThrow(Error);
  expect(() => getCardValue("♠A")).toThrow(Error);
  expect(() => getCardValue(" A♠")).toThrow(Error);
  expect(() => getCardValue("A♠♠")).toThrow(Error);
});

test("Arbitrary non-card string", () => {
  expect(() => getCardValue("invalid")).toThrow();
});