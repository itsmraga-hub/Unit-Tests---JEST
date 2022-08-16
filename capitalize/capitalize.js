const capitalize = (str) => {
  let newStr = str.toUpperCase();
  let output = '';
  for (let i = 0; i < newStr.length; i++) {
    if (i == 0) {
      output += newStr[i];
    } else {
      output += newStr[i].toLowerCase();
    }
  }
  return output;
}

// capitalize('abc')
console.log(capitalize('abc'));

module.exports = capitalize;