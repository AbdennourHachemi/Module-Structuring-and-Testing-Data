export function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  for (const character of stringOfCharacters) {
    if (character === findCharacter) {
      count++;
    }
  }
  return count;
}
