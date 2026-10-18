import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";


test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});
test("Classifies acute angles", () => {
  const acute = getAngleType(60);
  assert.equal(acute, "Acute angle");
});
test("Classifies obtuse angles", () => {
  const obtuse = getAngleType(120);
  assert.equal(obtuse, "Obtuse angle");
});
test("Classifies straight angles", () => {
  const straight = getAngleType(180);
  assert.equal(straight, "Straight angle");
});
test("Classifies reflex angles", () => {
  const reflex = getAngleType(350);
  assert.equal(reflex, "Reflex angle");
});
test("Classifies invalid angles", () => {
  const invalid = getAngleType(370);
  assert.equal(invalid, "Invalid angle");
});

