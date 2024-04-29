const e = require("express");

const { matMul, matPow, fibonacci } = require("./index");

test("matMul", () => {
  expect(
    matMul(
      [
        [1n, 2n],
        [3n, 4n],
      ],
      [
        [5n, 6n],
        [7n, 8n],
      ],
    ),
  ).toStrictEqual([
    [19n, 22n],
    [43n, 50n],
  ]);
});

test("matPow", () => {
  expect(
    matPow(
      [
        [1n, 1n],
        [1n, 0n],
      ],
      10n,
    ),
  ).toStrictEqual([
    [89n, 55n],
    [55n, 34n],
  ]);
});

test("fibonacci", () => {
  expect(fibonacci(10n)).toBe(55n);
  expect(fibonacci(100n)).toBe(354224848179261915075n);
});
