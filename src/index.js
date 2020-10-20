const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
        ' ':  ' ',
};

function decode(expr) {
    // write your solution here
    const array = [];
    const regZero = /00/g;
    const regSpace = /\*10/g;
    const regTen = /10/g;
    const regEleven = /11/g;

    for (var i = 0; i < expr.length - 1; i += 10) {
        array.push(MORSE_TABLE[expr.slice(i, i + 10).replace(regZero, '').replace(regEleven, '-').replace(regTen, '.').replace(regSpace, ' ')])
    }

    return array.join('')
}

module.exports = {
    decode
}