import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toBe(false);
});
test("decimal numerator should return false", () => {
  expect(isProperFraction(0.5, 2)).toBe(false);
});

test("zero numerator", () => {
  expect(isProperFraction(0, 5)).toBe(true);
});

test("numerator bigger than denominator", () => {
  expect(isProperFraction(20, 15)).toBe(false);
});

test("zero denominator", () => {
  expect(isProperFraction(100, 0)).toBe(false);
});

test("equal numerator and denominator", () => {
  expect(isProperFraction(3, 3)).toBe(false);
});

test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toBe(false);
});

test("decimal numerator should return false", () => {
  expect(isProperFraction(0.5, 2)).toBe(false);
});

test("zero numerator", () => {
  expect(isProperFraction(0, 5)).toBe(true);
});

test("numerator bigger than denominator", () => {
  expect(isProperFraction(20, 15)).toBe(false);
});

test("zero denominator should fail", () => {
  expect(isProperFraction(100, 0)).toBe(false);
});

test("negative numerator should pass", () => {
  expect(isProperFraction(-75, 100)).toBe(true);
});

