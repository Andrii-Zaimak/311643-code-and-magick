/**
 * Created by andre on 25.01.2017.
 */
'use strict';

var WIZARD_COAT_COLORS_LIST = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var WIZARD_EYES_COLORS_LIST = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var WIZARD_FIREBALL_COLORS_LIST = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var setupWindow = document.querySelector('.overlay.setup');
var setupOpenBtn = document.querySelector('.setup-open');
var setupCloseBtn = setupWindow.querySelector('.setup-close');
var userName = setupWindow.querySelector('.setup-user-name');
var wizardCoat = setupWindow.querySelector('#wizard-coat');
var wizardEyes = setupWindow.querySelector('#wizard-eyes');
var wizardFireball = setupWindow.querySelector('.setup-fireball-wrap');

var wizardCoatIndex = 0;
var wizardEyesIndex = 0;
var wizardFireballIndex = 0;

// add validation option to user name field
// - no empty
// - max length 50 chars
userName.required = true;
userName.maxLength = 50;

// change wizard coat
wizardCoat.addEventListener('click', function () {
  // check for empty list
  if (WIZARD_COAT_COLORS_LIST.length === 0) {
    return;
  }

  wizardCoat.style.fill = WIZARD_COAT_COLORS_LIST[(++wizardCoatIndex % WIZARD_COAT_COLORS_LIST.length)];
});

// change wizard eyes color
wizardEyes.addEventListener('click', function () {
  // check for empty list
  if (WIZARD_EYES_COLORS_LIST.length === 0) {
    return;
  }

  wizardEyes.style.fill = WIZARD_EYES_COLORS_LIST[(++wizardEyesIndex % WIZARD_EYES_COLORS_LIST.length)];
});

// change wizard fireball color
wizardFireball.addEventListener('click', function () {
  // check for empty list
  if (WIZARD_FIREBALL_COLORS_LIST.length === 0) {
    return;
  }

  wizardFireball.style.backgroundColor = WIZARD_FIREBALL_COLORS_LIST[(++wizardFireballIndex % WIZARD_FIREBALL_COLORS_LIST.length)];
});

// open setup window
setupOpenBtn.addEventListener('click', function () {
  setupWindow.classList.remove('invisible');
});

// close setup window
setupCloseBtn.addEventListener('click', function () {
  setupWindow.classList.add('invisible');
});
