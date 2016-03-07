//$(document).ready(function() {                //Ready!!!
                                              //set!!!
//    $('.square').on('click', function() {   //on click i want you to
//      $().();                                //move the chess piece
//    });                                     //to the location (within the array)
                                            //that i specify.
//  });


// Not what i want, but neat. Could lay an image under
// the squares to reveal it on the hover.
// $(document).ready(function() {
//
// $('.square').hover(function() {
//   $(this).slideUp(this);
//   });
//
// });


Moved a piece on click!!!!!!!!!!

$("#Forward").on('click', function(){
  var moveOne = '<i class="fa fa-shield enemy" id="enemy a"></i>';
  $('#28').append(moveOne);

  });
