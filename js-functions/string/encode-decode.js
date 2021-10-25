const getDict = () => {
  function shuffle(str) {
    var a = str.toString().split(""),
      n = a.length;
    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join("");
  }
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-.";
  const shuffleCharacters = shuffle(characters);
  let encode = {};
  let decode = {};

  for (let i = 0; i < characters.length; i++) {
    const c = characters[i];
    const s = shuffleCharacters[i];
    encode[c] = s;
    decode[s] = c;
  }
  return { encode, decode };
};

const dict = {
  encode: {
    0: "p",
    1: "5",
    2: "W",
    3: "R",
    4: "6",
    5: "f",
    6: "n",
    7: "-",
    8: "_",
    9: "t",
    A: "Z",
    B: "s",
    C: "U",
    D: "v",
    E: "C",
    F: "S",
    G: "h",
    H: "z",
    I: "9",
    J: "y",
    K: "j",
    L: "l",
    M: "g",
    N: "Y",
    O: "k",
    P: ".",
    Q: "a",
    R: "B",
    S: "7",
    T: "V",
    U: "A",
    V: "m",
    W: "D",
    X: "8",
    Y: "2",
    Z: "d",
    a: "Q",
    b: "i",
    c: "1",
    d: "K",
    e: "M",
    f: "O",
    g: "T",
    h: "r",
    i: "P",
    j: "G",
    k: "b",
    l: "I",
    m: "H",
    n: "u",
    o: "o",
    p: "F",
    q: "e",
    r: "N",
    s: "E",
    t: "c",
    u: "3",
    v: "q",
    w: "w",
    x: "J",
    y: "0",
    z: "X",
    _: "4",
    "-": "x",
    ".": "L",
  },
  decode: {
    0: "y",
    1: "c",
    2: "Y",
    3: "u",
    4: "_",
    5: "1",
    6: "4",
    7: "S",
    8: "X",
    9: "I",
    Z: "A",
    s: "B",
    U: "C",
    v: "D",
    C: "E",
    S: "F",
    h: "G",
    z: "H",
    y: "J",
    j: "K",
    l: "L",
    g: "M",
    Y: "N",
    k: "O",
    ".": "P",
    a: "Q",
    B: "R",
    V: "T",
    A: "U",
    m: "V",
    D: "W",
    d: "Z",
    Q: "a",
    i: "b",
    K: "d",
    M: "e",
    O: "f",
    T: "g",
    r: "h",
    P: "i",
    G: "j",
    b: "k",
    I: "l",
    H: "m",
    u: "n",
    o: "o",
    F: "p",
    e: "q",
    N: "r",
    E: "s",
    c: "t",
    q: "v",
    w: "w",
    J: "x",
    X: "z",
    p: "0",
    W: "2",
    R: "3",
    f: "5",
    n: "6",
    "-": "7",
    _: "8",
    t: "9",
    x: "-",
    L: ".",
  },
};

/**
 *
 * @param {string} str
 * @return {string}
 */
const encode = (str) => {
  let encoded = "";
  for (let i = 0; i < str.length; i++) {
    const _encodedChar = dict.encode[str[i]];
    const encodedChar = !!_encodedChar ? _encodedChar : str[i];
    encoded = encoded + encodedChar;
  }
  return encoded;
};

/**
 *
 * @param {string} str
 * @return {string}
 */
const decode = (str) => {
  let encoded = "";
  for (let i = 0; i < str.length; i++) {
    const _encodedChar = dict.decode[str[i]];
    const encodedChar = !!_encodedChar ? _encodedChar : str[i];
    encoded = encoded + encodedChar;
  }
  return encoded;
};

export { encode, decode, getDict };
