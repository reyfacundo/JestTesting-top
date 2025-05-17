export function caesarCipher(string, shift) {
  const plaintext = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const cipherText = []

  string.split('').forEach((letter) => {
    if (!plaintext.includes(letter.toLowerCase())) return cipherText.push(letter);
    let letterIndex = (plaintext.indexOf(letter.toLowerCase()) + shift) % 26;
    if (letter === letter.toUpperCase()) return cipherText.push(plaintext[letterIndex].toUpperCase());
    cipherText.push(plaintext[letterIndex]);
  });

  return cipherText.join('');
}
