const { test, expect } = require('@jest/globals');
const sum = require('./index');

test('adds 1 + 2 equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -1 + 1 equal 0', () => {
  expect(sum(-1, 1)).toBe(0);
});

test('adds 0 + 0 equal 0', () => {
  expect(sum(0, 0)).toBe(0);
});
