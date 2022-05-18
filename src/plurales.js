function plurales(str) {
  const sPluralVowels = ["a", "e", "i", "o", "u", 'é', 'ó', 'á'];
  const pluralConsonants = [
    "q",
    "w",
    "r",
    "t",
    "y",
    "p",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "c",
    "v",
    "b",
    "n",
    "m",
    "é",
    "í",
    "ú"
  ];
  const lastChar = str.toLowerCase().charAt(str.length - 1);

  var validString = new RegExp("[A-zÀ-ú]$");

  if (validString.test(str)) {
    if (lastChar === "x" || lastChar === "s") {
      return str.toLowerCase();
    } else if (sPluralVowels.includes(lastChar)) {
      return str.toLowerCase() + "s";
    } else if (pluralConsonants.includes(lastChar)) {
      return str.toLowerCase() + "es";
    } else if (lastChar === "z") {
      return str.toLowerCase().replace(/.$/, "ces");
    }
  } else {
    throw new Error("Invalid string");
  }
}

module.exports = plurales;
