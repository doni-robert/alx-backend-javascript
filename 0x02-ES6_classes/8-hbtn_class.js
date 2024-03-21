/**
 * Implements a class HolbertonClass
 */
export default class HolbertonClass {
  /**
       * Constructs a new HolbertonClass instance.
       *
       * @param {Number} size - The size of the HolbertonClass
       * @param {String} location - The location of the HolbertonClass
       */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  /**
       * Getter for location
       *
       * @returns {String} - The location of the HolbertonClass
       */
  get location() {
    return this._location;
  }

  /**
       * Setter for location
       *
       * @param {String} value - The location of the HolbertonClass
       * @throws {Error} - If value is not a string
       */
  set location(value) {
    if (typeof value !== 'string') {
      throw new Error('location must be a string');
    }
    this._location = value;
  }

  /**
       * Getter for size
       *
       * @returns {String} - The size of the HolbertonClass
       */
  get size() {
    return this._size;
  }

  /**
       * Setter for size
       *
       * @param {Number} value - The size of the HolbertonClass
       * @throws {Error} - If value is not a string
       */
  set size(value) {
    if (typeof value !== 'number') {
      throw new Error('size must be a number');
    }
    this._size = value;
  }

  /**
     * Returns the  value of the object.
     *
     * @returns {Number} - The value of the object
     */
  valueOf() {
    return this.size;
  }

  /**
     * Returns a string representation of the object.
     *
     * @returns {String} - A string representation of the object
     */
  toString() {
    return this.location;
  }
}
