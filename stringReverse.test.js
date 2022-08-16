const stringReverse = require('./stringReverse');

test ('Reverse string', () => {
  expect(stringReverse('abc')).toEqual('cba');
  expect(stringReverse('cba')).toEqual('abc');
})