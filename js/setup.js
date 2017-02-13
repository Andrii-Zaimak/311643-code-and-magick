/**
 * Created by andre on 25.01.2017.
 */
'use strict';

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
var setupOpenBtnNode = document.querySelector('.setup-open');
var setupCloseBtnNode = setupWindowNode.querySelector('.setup-close');
var setupSaveBtnNode = setupWindowNode.querySelector('.setup-submit');
var userNameNode = setupWindowNode.querySelector('.setup-user-name');
var wizardCoatNode = setupWindowNode.querySelector('#wizard-coat');
var wizardEyesNode = setupWindowNode.querySelector('#wizard-eyes');
var wizardFireballNode = setupWindowNode.querySelector('.setup-fireball-wrap');

var lastFocusElement;

// add validation option to user name field
// - no empty
// - max length 50 chars
userNameNode.required = true;
userNameNode.maxLength = 50;

// wizard color settings.
window.colorizeElement(wizardCoatNode, wizardCoatColorsList, 'fill');
window.colorizeElement(wizardEyesNode, wizardEyesColorsList, 'fill');
window.colorizeElement(wizardFireballNode, wizardFireballColorsList, 'background');

// open setup window
setupOpenBtnNode.addEventListener('click', function () {
  openSetupWindow();
});

setupOpenBtnNode.addEventListener('keydown', function (evt) {
  if (window.utils.isValidKeyPressed(evt, [window.utils.KEY_CODE_ENTER, window.utils.KEY_CODE_SPACE])) {
    openSetupWindow();
  }
});

/**
 * Open dialog window.
 */
function openSetupWindow() {
  setupWindowNode.classList.remove('invisible');

  // close setup window
  setupCloseBtnNode.addEventListener('click', closeSetupWindowHandler);
  setupCloseBtnNode.addEventListener('keydown', closeSetupWindowHandler);

  // close setup window when press save button
  setupSaveBtnNode.addEventListener('click', closeSetupWindowHandler);
  setupSaveBtnNode.addEventListener('keydown', closeSetupWindowHandler);

  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('focus', changeFocusHandler, true);

  // save last focused element
  lastFocusElement = document.activeElement;
  // set focus to setup window
  // setupWindowNode.focus();
  setupCloseBtnNode.focus();
}
/**
 * Close dialog window.
 */
function closeSetupWindow() {
  setupWindowNode.classList.add('invisible');

  // return focus to last focused element before open setup window
  if (lastFocusElement) {
    lastFocusElement.focus();
    lastFocusElement = null;
  }

  // remove unused listeners
  setupCloseBtnNode.removeEventListener('click', closeSetupWindowHandler);
  setupCloseBtnNode.removeEventListener('keydown', closeSetupWindowHandler);
  setupSaveBtnNode.removeEventListener('click', closeSetupWindowHandler);
  setupSaveBtnNode.removeEventListener('keydown', closeSetupWindowHandler);
  document.removeEventListener('keydown', keyDownHandler);
  document.removeEventListener('focus', changeFocusHandler, true);
}

/**
 * Key down.
 * @param {object} evt - keypress object.
 */
function keyDownHandler(evt) {
  if (window.utils.isValidKeyPressed(evt, [window.utils.KEY_CODE_ESCAPE])) {
    closeSetupWindow();
  }
}

/**
 * Change focus.
 * @param {object} evt - focus object.
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
    closeSetupWindow();
  }
}
