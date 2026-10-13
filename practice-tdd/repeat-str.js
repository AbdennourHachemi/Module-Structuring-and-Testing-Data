export function repeatStr(str, count) {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  if (count < 0) {
    return "Error! negative counts are not valid";
  }
  let result = "";
  let counter = count;
  while (counter > 0) {
    result += str;
    counter--;
  }
  return result;
}
