
$(function() {

  $(".tabContainer .tabs li").on('click', function(){

    // show panel
      var showPanel = $(this).attr('rel');
    // hide panel
      $(".tabContainer .panel").slideUp(300, function() {
          $(this).removeClass('.active');

        $('#'+showPanel).slideDown(300, function() {
          $(this).addClass('.active');
      });
    });

  });

});
