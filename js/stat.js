/**
 * Created by Andrii Z. on 22.01.2017.
 */

'use strict';

window.renderStatistics = function (ctx, names, stats) {
  var windowWidth = 420;
  var windowHeight = 270;
  var windowX = 100;
  var windowY = 10;
  var shadowOffset = 10;

  // window shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(windowX + shadowOffset, windowY + shadowOffset, windowWidth, windowHeight);
  // window fill
  ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
  ctx.strokeRect(windowX, windowY, windowWidth, windowHeight);
  ctx.fillRect(windowX, windowY, windowWidth, windowHeight);

  // window won message
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  var textY = 40;
  ctx.fillText('Ура вы победили!', 120, textY);
  ctx.fillText('Список результатов:', 120, textY + 20);

  // chart
  var maxPlayerTime = parseInt(stats[0], 10);
  var i = 0;

  for (i = 0; i < stats.length; i++) {
    stats[i] = parseInt(stats[i], 10);

    if (i === 0 || stats[i] > maxPlayerTime) {
      maxPlayerTime = stats[i];
    }
  }

  var drawChartItem = function (name, stat, index) {
    var myName = 'Вы';
    var offset = 50;
    var width = 40;
    var height = parseInt(150 * stat / maxPlayerTime, 10);
    var x = 160 + (width + offset) * index;
    var y = windowY + windowHeight - height - 30;

    // chart
    ctx.fillStyle = name === myName ? 'rgba(255, 0, 0, 1.0)' : 'rgba(0, 0, ' + ((Math.random() * 5) * 50).toFixed(0) + ', 1.0)';
    ctx.fillRect(x, y, width, height);

    // name
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';

    ctx.fillText(name, x, windowY + windowHeight - 10);

    // time
    ctx.fillText(stat, x, y - 5);
  };
  for (i = 0; i < stats.length; i++) {
    drawChartItem(names[i], stats[i], i);
  }
};
