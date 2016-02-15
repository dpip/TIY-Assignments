// $( "#sweet" ).on("click", function () {
//       alert($(this).text());
//
//       $( "#sweet" ).fadeIn( "slow", function() {
//       });
//     });

(function () {
$(".container1").on("click", function(event) {
  event.preventDefault();
  $("#overlay")
      .fadeIn()
      .find("#modal")
      .fadeIn();

});

$(".close").on("click", function(event) {
  event.preventDefault();
  $("#overlay")
      .fadeOut()
      .find("#modal")
      // .fadeOut();

});
})();
