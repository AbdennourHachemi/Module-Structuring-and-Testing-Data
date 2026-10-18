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


