import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});

test("decimal numerator should return flase", () => {
  
  assert.equal(isProperFraction(0.5, 2), false);
});


test("zero numerator should retrun true", () => {
  assert.equal(isProperFraction(0, 5), true);
});

test("numerator bigger then denuminator should return false", () => {
  assert.equal(isProperFraction(20, 15), false);
});
test("zero denumator should return false", () => {
  assert.equal(isProperFraction(100, 0), false);
});

test("equal numerator and denumerator should return false", () => {
  assert.equal(isProperFraction(3, 3), false);
});

test("negative numerator smaller then a positive denumerator should return true ", () => {
  assert.equal(isProperFraction(-5, 16), true);
});

test("positive numerator and negative denumerator should return false", () => {
  assert.equal(isProperFraction(5, -16), false);
});

test("negative numerator smaller then a negative denumerator should return false", () => {
  assert.equal(isProperFraction(-50 , -16), false);
});
test("negative numerator bigger then a negative denumerator should return true", () => {
  assert.equal(isProperFraction(-16, -50), true);
});





