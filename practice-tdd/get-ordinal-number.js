export function getOrdinalNumber(num) {
  if (String(num).match(/\b(?!11\b)\d*1\b/)) {
    return `${num}st`;
  }
  if (String(num).match(/\b(?!12\b)\d*2\b/)) {
    return `${num}nd`;
  }
   if (String(num).match(/\b(?!13\b)\d*3\b/)) {
     return `${num}rd`;
   }
  return `${num}th`

}
