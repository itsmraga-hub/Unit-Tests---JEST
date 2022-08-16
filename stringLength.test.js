const stringLength = require('./stringLength');

test('length of string abc', () => {
  expect(() => stringLength('')).toThrow(Error);
  expect(stringLength('abc')).toBe(3);
  expect(stringLength('abcde')).toBe(5);
  expect(stringLength('qwerty')).toBe(6);
  expect(() => stringLength('ragaasdasdassdasd')).toThrow(Error);
});

