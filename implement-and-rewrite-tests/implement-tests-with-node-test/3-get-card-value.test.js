import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

import { getCardValue } from "../implement/1-get-card-value.js";

test("Valid single-digit card", () => {
  expect(getCardValue("9♠")).toEqual(9);
});

test("Arbitrary non-card string", () => {
  expect(() => getCardValue("invalid")).toThrow(
    'Expected a number followed by a suit, but got "invalid"'
  );
});

test("Ace returns 11", () => {
  expect(getCardValue("A♠")).toEqual(11);
});

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

test("Invalid format throws an error", () => {
  expect(() => getCardValue("A★")).toThrow(Error);
  expect(() => getCardValue("11♠")).toThrow(Error);
  expect(() => getCardValue("X♥")).toThrow(Error);
  expect(() => getCardValue("A")).toThrow(Error);
  expect(() => getCardValue("♠A")).toThrow(Error);
  expect(() => getCardValue(" A♠")).toThrow(Error);
  expect(() => getCardValue("A♠♠")).toThrow(Error);
  expect(() => getCardValue(undefined)).toThrow(Error);
  expect(() => getCardValue(null)).toThrow(Error);
  expect(() => getCardValue("")).toThrow(Error);
  expect(() => getCardValue("a♠")).toThrow(Error);
  expect(() => getCardValue("k♥")).toThrow(Error);
  expect(() => getCardValue("q♦")).toThrow(Error);
});
