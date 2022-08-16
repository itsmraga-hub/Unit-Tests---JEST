const capitalize = require('./capitalize');

test('Capitalize', () => {
  expect(capitalize('william')).toEqual('William');
  expect(capitalize('raga')).toEqual('Raga');
})