// js Doc

/*
  {boolean} 
  {number}

  array of number
  {number[]}
  {Array.<number>}


  An object with string keys and number values:
  {Object.<string, number>} 
  {{a: number, b: string, c}} myObj

  {Object} myObj
  {number} myObj.a
  {string} myObj.b
  {*} myObj.c


  A number or null.
  {?number}

  A number, but never null.
  {!number}

  An optional parameter named foo.
  @param {number} [foo]
  @param {number=} foo
  @param {number} [foo=1]

*/

/**
 * @typedef {Object} suspiciousInput
 * @property {string} category
 * @property {string[]} inputs
 * 
 */

/**
 * @type {suspiciousInput}
 */
const sus ;


/**
 * A number, or a string containing a number.
 * @typedef {(number|string)} NumberLike
 */

/**
 * Set the magic number.
 * @param {NumberLike} x - The magic number.
 */
 function setMagicNumber(x) {}

/**
 * Enum for tri-state values.
 * @readonly
 * @enum {number}
 */
 var triState = {
  /** The true value */
  TRUE: 1,
  FALSE: -1,
  /** @type {boolean} */
  MAYBE: true,
};

// example
/**
 * Add function
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const addFn = (a, b) => {
  return a + b;
};
/**
 *
 * @param {Array.<number>} arrayArgs
 */
const addFn = (arrayArgs) => {
  return arrayArgs.reduce((pre, cur) => pre + cur, 0);
};



/**
 * 
 * @typedef {import('../string/suspicious-inputs.js').sus} sus
 *
 */


/**
 * @type {import('objection').Model}
 */
 class Post extends baseModel() {
  static tableName = "post";
  static seqId = "post_id_seq";
  static tsSearchColumns = ["search", "title", "description", "platform_name"];
  static hidden = ["search"];
  
}