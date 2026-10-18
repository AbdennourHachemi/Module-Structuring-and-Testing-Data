import { getAngleType } from "../implement/1-get-angle-type.js";




test("Classifies right angles", () => {
  expect(getAngleType(90)).toBe("Right angle");
});

test("Classifies acute angles", () => {
  expect(getAngleType(60)).toBe("Acute angle");
});

test("Classifies obtuse angles", () => {
  expect(getAngleType(120)).toBe("Obtuse angle");
});

test("Classifies straight angles", () => {
  expect(getAngleType(180)).toBe("Straight angle");
});

test("Classifies reflex angles", () => {
  expect(getAngleType(350)).toBe("Reflex angle");
});

test("Classifies invalid angles", () => {
  expect(getAngleType(370)).toBe("Invalid angle");
});


