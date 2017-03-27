console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  var items = {
      "Fire the missiles!": { timesClicked: 0 },
      "Launch the armada!": { timesClicked: 0 },
      "Charge!": { timesClicked: 0 },
      "Exterminate!": {timesClicked: 0},
      "Into the breech!": {timesClicked: 0},
      "This is Sparta!": {timesClicked: 0},
      "Huzzah!": {timesClicked: 0}
  }
  $('#imperatives span').click(function () {
      var span = $(this).data('span');
      items[span].timesClicked++;
      $(this).children("#imperatives span").text(items[span].timesClicked);
  });

});
