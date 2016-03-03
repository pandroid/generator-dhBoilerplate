/*
 * Layer
 * */

// Open Layer Function
const openLayer = (layer) => {
  // Body
  var _body = $('body');

  _body.attr('data-status', 'layer-open');
  $('.fullLayer[data-layer="'+layer+'"]').fadeIn(500);
};


// Close Layer Function
const closeLayer = (layer) => {
  // Body
  var _body = $('body');

  _body.attr('data-status', '');
  $('.fullLayer[data-layer]').fadeOut(250);
};


// Open Layer Trigger
var openTrigger = $('[data-js="fullLayer"]');
openTrigger.on('click', function(e) {
  e.preventDefault();

  // Layer
  var _layer = $(this).attr('data-layer');
  openLayer(_layer);
});


// Close Layer Trigger
var closeTrigger = $('[data-js="fullLayer__close"]');
closeTrigger.on('click', function(e) {
  e.preventDefault();

  closeLayer();
});

