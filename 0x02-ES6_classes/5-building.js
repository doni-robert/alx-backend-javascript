/**
 * Implements a class Building
 *
 * @param {Number} sqft - The square footage of the building
 *
 */
export default class Building {
  constructor(sqft) {
    // Check if the class is directly instantiated
    if (this.constructor !== Building) {
      // Get the properties of the subclass
      const props = Object.getOwnPropertyNames(this.constructor.prototype);
      // Check if the subclass overrides the evacuationWarningMessage method
      if (!props.find((e) => e === 'evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this.sqft = sqft; // Initialize the square footage
  }

  /**
     * Getter for sqft
     *
     * @returns {Number} - The square footage of the building
     */
  get sqft() {
    return this._sqft;
  }

  /**
     * Setter for sqft
     *
     * @param {Number} value - The square footage of the building
     */
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = value;
  }
}
