const {add, multiply} = require('./index');
const diff = require('jest-diff');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toEqual(3);
});

test('3 * 5 = 15', () => {
    expect(multiply(3, 5)).toEqual(15);
})

// const a = {a: {b: {c: 5}}};
// const b = {a: {b: {c: 6}}};

// const result = diff(a, b);

// // print diff
// console.log(result);