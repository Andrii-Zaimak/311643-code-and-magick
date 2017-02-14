/**
 * Created by andre on 25.01.2017.
 */
'use strict';

window.setup = (function () {
  var wizardCoatColorsList = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var wizardEyesColorsList = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var wizardFireballColorsList = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var setupWindowNode = document.querySelector('.setup');
  var setupCloseBtnNode = setupWindowNode.querySelector('.setup-close');
  var setupSaveBtnNode = setupWindowNode.querySelector('.setup-submit');
  var userNameNode = setupWindowNode.querySelector('.setup-user-name');
  var wizardCoatNode = setupWindowNode.querySelector('#wizard-coat');
  var wizardEyesNode = setupWindowNode.querySelector('#wizard-eyes');
  var wizardFireballNode = setupWindowNode.querySelector('.setup-fireball-wrap');

  var onCloseWindow;

  // add validation option to user name field
  // - no empty
  // - max length 50 chars
  userNameNode.required = true;
  userNameNode.maxLength = 50;

  // wizard color settings.
  window.colorizeElement(wizardCoatNode, wizardCoatColorsList, colorizeFill);
  window.colorizeElement(wizardEyesNode, wizardEyesColorsList, colorizeFill);
  window.colorizeElement(wizardFireballNode, wizardFireballColorsList, colorizeBackground);

  function colorizeFill(element, color) {
    element.style.fill = color;
  }

  function colorizeBackground(element, color) {
    element.style.background = color;
  }

  /**
   * Open dialog window.
   * @param {function} callback
     */
  function openWindow(callback) {
    onCloseWindow = callback;
    setupWindowNode.classList.remove('invisible');

    // close setup window
    setupCloseBtnNode.addEventListener('click', closeSetupWindowHandler);
    setupCloseBtnNode.addEventListener('keydown', closeSetupWindowHandler);

    // close setup window when press save button
    setupSaveBtnNode.addEventListener('click', closeSetupWindowHandler);
    setupSaveBtnNode.addEventListener('keydown', closeSetupWindowHandler);

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('focus', changeFocusHandler, true);

    // set focus to setup window
    setupCloseBtnNode.focus();
  }

  /**
   * Close dialog window.
   */
  function closeWindow() {
    setupWindowNode.classList.add('invisible');

    // remove unused listeners
    setupCloseBtnNode.removeEventListener('click', closeSetupWindowHandler);
    setupCloseBtnNode.removeEventListener('keydown', closeSetupWindowHandler);
    setupSaveBtnNode.removeEventListener('click', closeSetupWindowHandler);
    setupSaveBtnNode.removeEventListener('keydown', closeSetupWindowHandler);
    document.removeEventListener('keydown', keyDownHandler);
    document.removeEventListener('focus', changeFocusHandler, true);

    // callback function
    if (typeof onCloseWindow === 'function') {
      onCloseWindow();
    }
  }

  /**
   * Key down.
   * @param {Object} evt - keypress object.
   */
  function keyDownHandler(evt) {
    if (window.utils.isValidKeyPressed(evt, [window.utils.KEY_CODE_ESCAPE])) {
      closeWindow();
    }
  }

  /**
   * Change focus.
   * @param {Object} evt - focus object.
   */
  function changeFocusHandler(evt) {
    if (!setupWindowNode.contains(evt.target)) {
      evt.preventDefault();
      setupCloseBtnNode.focus();
    }
  }

  function closeSetupWindowHandler(evt) {
    if (evt.type === 'click' || evt.type === 'keydown' && window.utils.isValidKeyPressed(evt, [window.utils.KEY_CODE_ENTER, window.utils.KEY_CODE_SPACE])) {
      evt.stopPropagation();
      closeWindow();
    }
  }

  return {
    show: openWindow
  };
})();
