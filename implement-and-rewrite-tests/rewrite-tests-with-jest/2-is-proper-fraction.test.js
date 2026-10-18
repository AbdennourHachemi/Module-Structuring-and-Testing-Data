import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});


test("decimal numerator should return flase", () => {
  
  assert.equal(isProperFraction(0.5, 2), false);
});


test("zero numerator", () => {
  assert.equal(isProperFraction(0, 5), true);
});

test("numerator bigger then denumnator", () => {
  assert.equal(isProperFraction(20, 15), false);
});
test("zero denumator", () => {
  assert.equal(isProperFraction(100, 0), false);
});

test("equal numrator and denumerator ", () => {
  assert.equal(isProperFraction(3, 3), false);
});

