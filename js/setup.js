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
var userNameNode = setupWindowNode.querySelector('.setup-user-name');
var wizardCoatNode = setupWindowNode.querySelector('#wizard-coat');
var wizardEyesNode = setupWindowNode.querySelector('#wizard-eyes');
var wizardFireballNode = setupWindowNode.querySelector('.setup-fireball-wrap');

var wizardCoatIndex = 0;
var wizardEyesIndex = 0;
var wizardFireballIndex = 0;

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
setupOpenBtnNode.addEventListener('click', function () {
  setupWindowNode.classList.remove('invisible');
});

// close setup window
setupCloseBtnNode.addEventListener('click', function () {
  setupWindowNode.classList.add('invisible');
});
