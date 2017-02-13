/**
 * Created by andre on 06.02.2017.
 */
'use strict';

window.utils = {
  KEY_CODE_ENTER: 13,
  KEY_CODE_ESCAPE: 27,
  KEY_CODE_SPACE: 32,

  /**
   * Get random color of array.
   * @param {Array} arr - source array.
   * @return {string} - random color.
   */
  getRandomElement: function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  /**
   * Get random color doesn't include color.
   * @param {Array} arr - source array.
   * @param {string} color - index.
   * @return {string} - random color.
   */
  getRandomElementExcept: function (arr, color) {
    var currentColor = null;

    do {
      currentColor = this.getRandomElement(arr);
    } while (currentColor === color);

    return currentColor;
  },
  /**
   * Check for need key is pressed.
   * @param {object} evt - keypress object.
   * @param {Array} keyCodes - list of valid keys.
   * @return {boolean} true - if key is valid, false - if keyCode is undefined or invalid.
   */
  isValidKeyPressed: function (evt, keyCodes) {
    return evt.keyCode && keyCodes.indexOf(evt.keyCode) !== -1;
  }
};
