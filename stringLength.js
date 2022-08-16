// Returns the length of a string
const stringLength = str => {
  let i = 0;
  let len = 0;
  for (; i < str.length; i++)
    len++

  if (len < 1) {
    throw new Error('String null');
  } else if (len >= 1 && len <= 10) {
    return len;
  } else {
    throw new Error('String longer than 10 characters');
  }
}


module.exports = stringLength;