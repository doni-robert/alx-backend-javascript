/**
 * Implements a class Airport
 */
export default class Airport {
  /**
     * Constructs a new Airport instance.
     *
     * @param {String} name - The name of the airport
     * @param {String} code - The code of the airport
     */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
     * Getter for code
     *
     * @returns {String} - The code of the airport
     */
  get code() {
    return this._code;
  }

  /**
     * Setter for code
     *
     * @param {String} value - The code of the airport
     * @throws {Error} - If value is not a string
     */
  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('code must be a string');
    }
    this._code = value;
  }

  /**
     * Getter for name
     *
     * @returns {String} - The name of the airport
     */
  get name() {
    return this._name;
  }

  /**
     * Setter for name
     *
     * @param {String} value - The name of the airport
     * @throws {Error} - If value is not a string
     */
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = value;
  }

  /**
     * Returns the code of the airport as the default string tag
     *
     * @returns {String} - The code of the airport
     */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
