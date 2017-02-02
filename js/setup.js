/**
 * Created by andre on 25.01.2017.
 */
'use strict';

var KEY_CODE_ENTER = 13;
var KEY_CODE_ESCAPE = 27;

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

var wizardCoatIndex = 0;
var wizardEyesIndex = 0;
var wizardFireballIndex = 0;

var lastFocusElement;

// add validation option to user name field
// - no empty
// - max length 50 chars
userNameNode.required = true;
userNameNode.maxLength = 50;

// change wizard coat
wizardCoatNode.addEventListener('click', function () {
  wizardCoatNode.style.fill = wizardCoatColorsList[++wizardCoatIndex % wizardCoatColorsList.length];
});

// change wizard eyes color
wizardEyesNode.addEventListener('click', function () {
  wizardEyesNode.style.fill = wizardEyesColorsList[++wizardEyesIndex % wizardEyesColorsList.length];
});

// change wizard fireball color
wizardFireballNode.addEventListener('click', function () {
  wizardFireballNode.style.backgroundColor = wizardFireballColorsList[++wizardFireballIndex % wizardFireballColorsList.length];
});

// open setup window
setupOpenBtnNode.addEventListener('click', function (evt) {
  openSetupWindow(evt);
});

setupOpenBtnNode.addEventListener('keydown', function (evt) {
  if (isValidKeyPressed(evt.keyCode, KEY_CODE_ENTER)) {
    openSetupWindow(evt);
  }
});

// close setup window
setupCloseBtnNode.addEventListener('click', function () {
  closeSetupWindow();
});

setupCloseBtnNode.addEventListener('keydown', function (evt) {
  if (isValidKeyPressed(evt.keyCode, KEY_CODE_ENTER)) {
    closeSetupWindow();
  }
});

// save setup settings
setupSaveBtnNode.addEventListener('click', function () {
  closeSetupWindow();
});

setupSaveBtnNode.addEventListener('keydown', function (evt) {
  if (isValidKeyPressed(evt.keyCode, KEY_CODE_ENTER)) {
    closeSetupWindow();
  }
});

// open dialog
function openSetupWindow(evt) {
  setupWindowNode.classList.remove('invisible');

  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('focus', changeFocusHandler, true);

  // save last focused element
  lastFocusElement = evt.target;
  // set focus to setup window
  setupWindowNode.focus();
}
// close dialog
function closeSetupWindow() {
  setupWindowNode.classList.add('invisible');

  // return focus to last focused element before open setup window
  if (lastFocusElement) {
    lastFocusElement.focus();
    lastFocusElement = null;
  }

  // remove unused listeners
  document.removeEventListener('keydown', keyDownHandler);
  document.removeEventListener('focus', changeFocusHandler, true);
}

function keyDownHandler(evt) {
  if (isValidKeyPressed(evt.keyCode, KEY_CODE_ESCAPE)) {
    closeSetupWindow();
  }
}

// check for need key is pressed
function isValidKeyPressed(keyCode, needKey) {
  return keyCode && keyCode === needKey;
}

// change focus in dialog
function changeFocusHandler(evt) {
  if (!setupWindowNode.contains(evt.target)) {
    evt.preventDefault();
    setupCloseBtnNode.focus();
  }
}
