export function getOrdinalNumber(num) {
  const lastTwoDigits = num % 100;

  // Handle exceptions: 11th, 12th, 13th, 111th, etc.
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }

  switch (num % 10) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}
