// $( "#sweet" ).on("click", function () {
//       alert($(this).text());
//
//       $( "#sweet" ).fadeIn( "slow", function() {
//       });
//     });

$(function () {


$(".modalClick").on("click", function() {
  // event.preventDefault();
  $("#overlay")
      .fadeIn("slow")
      .find("#modal")
      .fadeIn("slow");

});

$(".close, #overlay").on("click", function() {
  // event.preventDefault();
  $("#overlay")
      .fadeOut("slow")
      .find("#modal")
      .fadeOut("slow");

});
})();
