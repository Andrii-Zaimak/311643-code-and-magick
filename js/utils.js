/**
 * Created by andre on 06.02.2017.
 */
'use strict';

window.utils = {
  KEY_CODE_ENTER: 13,
  KEY_CODE_ESCAPE: 27,
  KEY_CODE_SPACE: 32,

  /**
   * Get random index of array.
   * @param {Array} arr - source array.
   * @return {number} - random index.
   */
  getRandomElement: function (arr) {
    return Math.floor(Math.random() * arr.length);
  },
  /**
   * Get random index doesn't include index.
   * @param {Array} arr - source array.
   * @param {number} lastIndex - index.
   * @return {number} - random index.
   */
  getRandomElementExcept: function (arr, lastIndex) {
    var index = null;

    do {
      index = this.getRandomElement(arr);
    } while (index === lastIndex);

    return index;
  },
  /**
   * Get next index in array.
   * @param {Array} arr - source array.
   * @param {number} currentIndex - current index in array.
   * @return {number}
     */
  getNextIndex: function (arr, currentIndex) {
    return (currentIndex + 1) % arr.length;
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
