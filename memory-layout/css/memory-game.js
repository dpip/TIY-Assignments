//TIME>>>>>>>>>>>>>>>>>>
var start = new Date;

setInterval(function() {
    $('.time').text((new Date - start) / 1 + " Seconds");
}, 1000);
//TIME>>>>>>>>>>>>>>>>>>>>>>>>>>>

//CARD FLIP>>>>>>>>>>>>>>>>>>>>>>

$(".Card").on("click", function() {
  if($(this).hasClass("flipped")) {
    $(this).css({
     'transform': 'rotateY(0deg)',
     'transition': 'background 1s, -webkit-transform 1s',
     'color': 'transparent'}
    );
     $(this).removeClass("flipped");

  } else {

  $(this).css({
   'transform': 'rotateY(180deg)',
   'transition': 'background 1s, -webkit-transform 1s',
   'color': 'white'}
  );
  $(this).addClass("flipped");
}
});

//Card FLIP>>>>>>>>>>>>>>>>>>>>>>>
