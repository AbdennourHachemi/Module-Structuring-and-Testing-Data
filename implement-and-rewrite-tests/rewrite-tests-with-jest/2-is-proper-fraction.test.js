import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toBe(false);
});
test("decimal numerator should return false", () => {
  expect(isProperFraction(0.5, 2)).toBe(false);
});

test("zero numerator should return true", () => {
  expect(isProperFraction(0, 5)).toBe(true);
});

test("numerator bigger then denominator should return false", () => {
  expect(isProperFraction(20, 15)).toBe(false);
});

test("equal numerator and denominator should return false", () => {
  expect(isProperFraction(3, 3)).toBe(false);
});

test("should return false when denominator is zero", () => {
  expect(isProperFraction(100, 0)).toBe(false);
});

test("negative numeratore smaller then a positive denumerator should return true", () => {
  expect(isProperFraction(-5, 16)).toBe(true);
});

test("positive numeratior and negative denumerator should return false", () => {
  expect(isProperFraction(5, -16)).toBe(false);
});

test("negative numerator smaller  than  a  negative denominator should return false", () => {
  expect(isProperFraction(20, 15)).toBe(false);
});

test("negative numerator bigger  than  a  negative denominator should return false", () => {
  expect(isProperFraction(-16, -50)).toBe(false);
});
