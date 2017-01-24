/**
 * Created by Andrii Z. on 22.01.2017.
 */

'use strict';

window.renderStatistics = function (ctx, names, stats) {
  var WINDOW_WIDTH = 420;
  var WINDOW_HEIGHT = 270;
  var WINDOW_X = 100;
  var WINDOW_Y = 10;
  var WINDOW_SHADOW_OFFSET = 10;
  var i;

  // window shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(WINDOW_X + WINDOW_SHADOW_OFFSET, WINDOW_Y + WINDOW_SHADOW_OFFSET, WINDOW_WIDTH, WINDOW_HEIGHT);
  // window fill
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.strokeRect(WINDOW_X, WINDOW_Y, WINDOW_WIDTH, WINDOW_HEIGHT);
  ctx.fillRect(WINDOW_X, WINDOW_Y, WINDOW_WIDTH, WINDOW_HEIGHT);

  // window won message
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', WINDOW_X + 20, WINDOW_Y + 40);
  ctx.fillText('Список результатов:', WINDOW_X + 20, WINDOW_Y + 60);

  // chart
  var maxPlayerTime = stats[0];

  for (i = 1; i < stats.length; i++) {
    // find max value
    if (stats[i] > maxPlayerTime) {
      maxPlayerTime = stats[i];
    }
  }
  // draw chart items
  for (i = 0; i < stats.length; i++) {
    drawChartItem(names[i], stats[i], i);
  }

  function drawChartItem(name, stat, index) {
    var START_X = WINDOW_X + 60;
    var MAX_HEIGHT = 150;
    var myName = 'Вы';
    var offset = 50;
    var width = 40;
    var height = parseInt(MAX_HEIGHT * stat / maxPlayerTime, 10);
    var x = START_X + (width + offset) * index;
    var y = WINDOW_Y + WINDOW_HEIGHT - height - 30;

    // chart
    ctx.fillStyle = name === myName ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, ' + ((Math.random() * 5) * 50).toFixed(0) + ', 1.0)';
    ctx.fillRect(x, y, width, height);

    // name
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';

    ctx.fillText(name, x, WINDOW_Y + WINDOW_HEIGHT - 10);

    // time
    ctx.fillText(stat.toFixed(0), x, y - 5);
  }
};
