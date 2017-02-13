/**
 * Created by andre on 06.02.2017.
 */
'use strict';

/**
 * Colorize select element.
 * @param {Object} element
 * @param {Array} colors
 * @param {string} property
 */
window.colorizeElement = function (element, colors, property) {
  var currentColor = null;

  var changeColor = function () {
    currentColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = currentColor;
  };

  element.addEventListener('keydown', function (evt) {
    if (window.utils.isValidKeyPressed(evt, [window.utils.KEY_CODE_ENTER, window.utils.KEY_CODE_SPACE])) {
      evt.stopPropagation();
      changeColor();
    }
  });

  element.addEventListener('click', changeColor);
};
