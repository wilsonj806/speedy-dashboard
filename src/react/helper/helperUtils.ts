const capitalizeString = (string: string): string => {
  if (string == null) throw new Error('Expecting a string input')
  const regex = /\b[a-z]/i;
  const match = string.match(regex);
  if (match == null) throw new Error('Error expecting a non-zero length string')
  const capitalizedLetter = match[0].toUpperCase();
  const capitalizedString = string.replace(regex, capitalizedLetter);
  return capitalizedString;
}

export {
  capitalizeString,
}