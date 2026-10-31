import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Expected a number followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});

// TODO: What other invalid card cases can you think of?
test("Ace returns 11", () => {
  assert.equal(getCardValue("A♠"), 11);
});

test("Number card returns its numeric value", () => {
  assert.equal(getCardValue("2♥"), 2);
  assert.equal(getCardValue("7♦"), 7);
  assert.equal(getCardValue("10♣"), 10);
});

test("Face cards return 10", () => {
  assert.equal(getCardValue("J♣"), 10);
  assert.equal(getCardValue("Q♦"), 10);
  assert.equal(getCardValue("K♥"), 10);
});

test("Invalid format throws an error", () => {
  assert.throws(() => getCardValue("A★"), Error);
  assert.throws(() => getCardValue("11♠"), Error);
  assert.throws(() => getCardValue("X♥"), Error);
  assert.throws(() => getCardValue("A"), Error);
  assert.throws(() => getCardValue("♠A"), Error);
  assert.throws(() => getCardValue(" A♠"), Error);
  assert.throws(() => getCardValue("A♠♠"), Error);
  assert.throws(() => getCardValue(undefined), Error);
  assert.throws(() => getCardValue(null), Error);
  assert.throws(() => getCardValue(""), Error);
  assert.throws(() => getCardValue("a♠"), Error);
  assert.throws(() => getCardValue("k♥"), Error);
  assert.throws(() => getCardValue("q♦"), Error);
});
