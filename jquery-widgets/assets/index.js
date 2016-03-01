$(function () {
$(".modalClick").on("click", function() {
  $("#overlay")
      .fadeIn("slow")
});
$(".close, #overlay").on("click", function() {
  $("#overlay")
      .fadeOut("slow")
});
})();
