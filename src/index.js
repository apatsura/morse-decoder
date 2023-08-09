const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {

  function decodeBinaryCode(expr) {
    let morse = expr
      .split(/(?=(?:\d{10})+(?!\d))/)
      .join(' ')
      .replaceAll('11', '-')
      .replaceAll('10', '.')
      .replaceAll('0', '')
      .replaceAll('********** ', '  ');

    return morse;
    // return console.log(morse);
  }

  let words = decodeBinaryCode(expr);
  let word = words.split('  ');
  let letters = word.map((w) => w.split(' '));
  let decoded = [];
  // return console.log(decoded);

  for (let i = 0; i < letters.length; i++) {
    decoded[i] = [];
    for (let x = 0; x < letters[i].length; x++) {
      if (MORSE_TABLE[letters[i][x]]) {
        decoded[i].push(MORSE_TABLE[letters[i][x]]);
      }
    }
  }

  return decoded.map(arr => arr.join('')).join(' ').trim();
}

module.exports = {
    decode
}