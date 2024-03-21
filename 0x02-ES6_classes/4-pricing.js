import Currency from './3-currency';

/**
 * Implements a class Pricing
 *
 * @param {Number} amount - the pricing amount
 * @param {Currency} currency - the pricing currency
 *
 */
export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount; // Pricing amount
    this.currency = currency; // Pricing currency
  }

  /**
     * Getter for amount
     *
     * @returns {Number} - The pricing amount
     */
  get amount() {
    return this._amount;
  }

  /**
     * Setter for amount
     *
     * @param {Number} value - The pricing amount
     */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new Error('amount must be a number');
    }
    this._amount = value;
  }

  /**
     * Getter for currency
     *
     * @returns {Currency} - The pricing currency
     */
  get currency() {
    return this._currency;
  }

  /**
     * Setter for currency
     *
     * @param {Currency} value - The pricing currency
     */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new Error('amount must be a currency');
    }
    this._currency = value;
  }

  /**
     * Display full price including currency name and code
     *
     * @returns {String} - Full price including currency name and code
     */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
     * Convert price based on conversation rate
     *
     * @param {Number} amount - The pricing amount
     * @param {Number} conversationRate - The conversation rate
     * @returns {Number} - Converted price
     */
  static convertPrice(amount, conversationRate) {
    return amount * conversationRate;
  }
}
