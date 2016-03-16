//login slide\
var maxAppend = 0;
$('.fancyLogin').on('click', function(){
  if (maxAppend >= 1) return;
  $(".land").append('<div class="fancyField"><div class="enterUp" id="enterU">U</div><input type="text" name="name" class="logM"><br><div class="enterUp" id="enterP">P</div><input type="text" name="name" class="logM"></div>');
  maxAppend++;

  $('.fancyLogin').addClass("bluer");

});

//Changes background of login
// $(".fancyLogin").hover(function() {
//   $(this).addClass("bluer");
// }, function() {
//   $(this).removeClass("bluer");
// });

//Changes background of signup, login, and icons
$(".Nter").hover(function() {
  $("#iN").addClass("blue");
}, function() {
  $("#iN").removeClass("blue");
});

$(".Nquerious").hover(function() {
  $("#iQ").addClass("blue");
}, function() {
  $("#iQ").removeClass("blue");
});

$(".icon").hover(function() {
  $(this).addClass("blueCon");
}, function() {
  $(this).removeClass("blueCon");
});

$("#contact").hover(function() {
  $(this).addClass("blueCon");
}, function() {
  $(this).removeClass("blueCon");
});

//modal drop

$(".Nter").on('click', function() {
   $(".signModal").fadeIn("slow");
})
$(".exit").on('click', function() {
   $(".signModal").fadeOut("slow");
})
$(".signModal").on('click', function() {
  $(this).fadeOut("slow");
})

$(".Ntrested").on('click', function() {
   $(".signModal").fadeIn("slow");
})
$(".exit").on('click', function() {
   $(".signModal").fadeOut("slow");
})

//toggles querious
$(".Nter").hide();
$('.Nquerious').on('click', function(){
  $('.disVision').fadeIn("slow");
  $(".Nter").show();

});
