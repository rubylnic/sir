 $(function(){
  $('#slider').slider({
    range: true,
    min: 0,
    max: 9999,
    values: ['86', '5000'],
    slide: function(event, ui) {
      $('#min').val(ui.values[0]);
      $('#max').val(ui.values[1]);
    }
  });
});
