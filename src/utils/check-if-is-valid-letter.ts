export function checkIfIsValidLetter(string: string): boolean {
  const stringHasNumbers = /\d/.test(string)
  const stringWithoutSpecialCharacters = string.replace(/[^a-z]/gi, '');
  return string.length === 1 && !stringHasNumbers && stringWithoutSpecialCharacters.length === 1
}