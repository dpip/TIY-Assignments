// $(function() {
//     var i = 0;
//     $('.Card').on('click', function()   i++;
//         if( i % 2 == 0){
//             $(this).addClass('').removeClass('arrowdown');
//         }
//         else{
//             $(this).addClass('arrowdown').removeClass('arrowup');
//         }
//     });
// });​

///////Stack answer to flip cards back after flipping them>>>>>>>>

(function() {
  var cards = document.querySelectorAll(".Card.effect__click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }

  function clickListener(card) {
       card.addEventListener( "click", function() {
           $('.card.effect__click').removeClass('flipped');
           var c = this.classList;
           c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
       });
  }

  // $(this).css({
  //  'transform': 'rotateY(180deg)',
  //  'transition': 'background 1s, -webkit-transform 1s',
  //  'color': 'white'}
  // );


  // if($(this).hasClass("flipped")) {
  //   $(this).css({
  //    'transform': 'rotateY(-180deg)',
  //    'transition': 'background 1s, -webkit-transform 1s',
  //    'color': 'transparent'}
  //   );
  //    $(this).removeClass("flipped");
  // }

  //    else {
  //
  //   $(this).css({
  //    'transform': 'rotateY(180deg)',
  //    'transition': 'background 1s, -webkit-transform 1s',
  //    'color': 'white'}
  //   );
  //   $(this).addClass("flipped");
  // }

//HAHA>>>>>>>>>>>>>>>
//
//  $("#card2").on("click", function() {
//   $(this).css({
//     'transform': 'rotateY(180deg)',
//     'transition': 'background 1s, -webkit-transform 1s'
//   });
//   $("#rocket1").css({
//     'color': 'white'
//    });
//   });
//   $("#card3").on("click", function() {
//    $(this).css({
//      'transform': 'rotateY(180deg)',
//      'transition': 'background 1s, -webkit-transform 1s'
//    });
//    $("#cloud1").css({
//      'color': 'white'
//     });
//    });
//    $("#card4").on("click", function() {
//     $(this).css({
//       'transform': 'rotateY(180deg)',
//       'transition': 'background 1s, -webkit-transform 1s'
//     });
//     $("#heart1").css({
//       'color': 'white'
//      });
//     });
//     $("#card5").on("click", function() {
//      $(this).css({
//        'transform': 'rotateY(180deg)',
//        'transition': 'background 1s, -webkit-transform 1s'
//      });
//      $("#shuttle1").css({
//        'color': 'white'
//       });
//      });
//      $("#card6").on("click", function() {
//       $(this).css({
//         'transform': 'rotateY(180deg)',
//         'transition': 'background 1s, -webkit-transform 1s'
//       });
//       $("#lizzard1").css({
//         'color': 'white'
//        });
//       });
//       $("#card7").on("click", function() {
//        $(this).css({
//          'transform': 'rotateY(180deg)',
//          'transition': 'background 1s, -webkit-transform 1s'
//        });
//        $("#dribble1").css({
//          'color': 'white'
//         });
//        });
//        $("#card8").on("click", function() {
//         $(this).css({
//           'transform': 'rotateY(180deg)',
//           'transition': 'background 1s, -webkit-transform 1s'
//         });
//         $("#rocket2").css({
//           'color': 'white'
//          });
//         });
//         $("#card9").on("click", function() {
//          $(this).css({
//            'transform': 'rotateY(180deg)',
//            'transition': 'background 1s, -webkit-transform 1s'
//          });
//          $("#money1").css({
//            'color': 'white'
//           });
//          });
//          $("#card10").on("click", function() {
//           $(this).css({
//             'transform': 'rotateY(180deg)',
//             'transition': 'background 1s, -webkit-transform 1s'
//           });
//           $("#hand2").css({
//             'color': 'white'
//            });
//           });
//           $("#card11").on("click", function() {
//            $(this).css({
//              'transform': 'rotateY(180deg)',
//              'transition': 'background 1s, -webkit-transform 1s'
//            });
//            $("#lemon1").css({
//              'color': 'white'
//             });
//            });
//            $("#card12").on("click", function() {
//             $(this).css({
//               'transform': 'rotateY(180deg)',
//               'transition': 'background 1s, -webkit-transform 1s'
//             });
//             $("#heart2").css({
//               'color': 'white'
//              });
//             });
//             $("#card13").on("click", function() {
//              $(this).css({
//                'transform': 'rotateY(180deg)',
//                'transition': 'background 1s, -webkit-transform 1s'
//              });
//              $("#shuttle2").css({
//                'color': 'white'
//               });
//              });
//              $("#card14").on("click", function() {
//               $(this).css({
//                 'transform': 'rotateY(180deg)',
//                 'transition': 'background 1s, -webkit-transform 1s'
//               });
//               $("#lemon2").css({
//                 'color': 'white'
//                });
//               });
//               $("#card15").on("click", function() {
//                $(this).css({
//                  'transform': 'rotateY(180deg)',
//                  'transition': 'background 1s, -webkit-transform 1s'
//                });
//                $("#cloud2").css({
//                  'color': 'white'
//                 });
//                });
//                $("#card16").on("click", function() {
//                 $(this).css({
//                   'transform': 'rotateY(180deg)',
//                   'transition': 'background 1s, -webkit-transform 1s'
//                 });
//                 $("#lizzard2").css({
//                   'color': 'white'
//                  });
//                 });
//                 $("#card17").on("click", function() {
//                  $(this).css({
//                    'transform': 'rotateY(180deg)',
//                    'transition': 'background 1s, -webkit-transform 1s'
//                  });
//                  $("#money2").css({
//                    'color': 'white'
//                   });
//                  });
//                  $("#card18").on("click", function() {
//                   $(this).css({
//                     'transform': 'rotateY(180deg)',
//                     'transition': 'background 1s, -webkit-transform 1s'
//                   });
//                   $("#dribble2").css({
//                     'color': 'white'
//                    });
//                   });
