/**
 * Created by andre on 14.02.2017.
 */

'use strict';

(function () {
  var setupOpenBtnNode = document.querySelector('.setup-open-icon');

  /**
   * Set focus to setup open button.
   */
  var focusSetupOpenButton = function () {
    setupOpenBtnNode.focus();
  };
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
   * Open setup window.
   */
  function openSetupWindow() {
    window.setup.show(focusSetupOpenButton);
  }
})();
