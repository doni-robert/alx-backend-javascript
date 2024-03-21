import Building from './5-building';

/**
 * Implements a class SkyHighBuilding, extending Building
 *
 * @param {Number} sqft - The square footage of the building
 * @param {Number} floors - The number of floors in the building
 *
 */
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
     * Getter for floors
     *
     * @returns {Number} - The number of floors in the building
     */
  get floors() {
    return this._floors;
  }

  /**
     * Setter for floors
     *
     * @param {Number} value - The number of floors in the building
     */
  set floors(value) {
    if (typeof value !== 'number') {
      throw new Error('floors must be a number');
    }
    this._floors = value;
  }

  /**
     * Generates an evacuation warning message for the building
     *
     * @returns {String} - Evacuation warning message
     */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
