// Used Lesson example of a two demensional Array

$(document).ready(function() {
  'use strict'; {


  var gameBoard0 = [
  ['<i class="fa fa-shield enemy" id="enemy a"></i>','<i class="fa fa-umbrella enemy" id="enemy b"></i>','<i class="fa fa-trophy enemy" id="enemy c"></i>','<i class="fa fa-mars-stroke-v king-queen enemy" id="enemy d"></i>','<i class="fa fa-venus king-queen enemy" id="enemy e"></i>','<i class="fa fa-trophy enemy" id="enemy c"></i>','<i class="fa fa-umbrella enemy" id="enemy b"></i>','<i class="fa fa-shield enemy" id="enemy a"></i>'],
  ['<i class="fa fa-paper-plane-o enemy" id="enemy p"></i>','<i class="fa fa-paper-plane-o enemy" id="enemy p"></i>','<i class="fa fa-paper-plane-o enemy" id="enemy p"></i>','<i class="fa fa-paper-plane-o enemy" id="enemy p"></i>','<i class="fa fa-paper-plane-o enemy" id="enemy p"></i>','<i class="fa fa-paper-plane-o enemy" id="enemy p"></i>','<i class="fa fa-paper-plane-o enemy" id="enemy p"></i>','<i class="fa fa-paper-plane-o enemy" id="enemy p"></i>'],
  ['       ','       ','       ','       ','       ','       ','       ','       '],
  ['       ','       ','       ','       ','       ','       ','       ','       '],
  ['       ','       ','       ','       ','       ','       ','       ','       '],
  ['       ','       ','       ','       ','       ','       ','       ','       '],
  ['<i class="fa fa-paper-plane-o player" id="player P"></i>','<i class="fa fa-paper-plane-o player" id="player P"></i>','<i class="fa fa-paper-plane-o player" id="player P"></i>','<i class="fa fa-paper-plane-o player" id="player P"></i>','<i class="fa fa-paper-plane-o player" id="player P"></i>','<i class="fa fa-paper-plane-o player" id="player P"></i>','<i class="fa fa-paper-plane-o player" id="player P"></i>','<i class="fa fa-paper-plane-o player" id="player P"></i>'],
  ['<i class="fa fa-shield player" id="player A"></i>','<i class="fa fa-umbrella player" id="player B"></i>','<i class="fa fa-trophy player" id="player C"></i>','<i class="fa fa-mars-stroke-v king-queen player" id="player D"></i>','<i class="fa fa-venus king-queen player" id="player E"></i>','<i class="fa fa-trophy player" id="player C"></i>','<i class="fa fa-umbrella player" id="player B"></i>','<i class="fa fa-shield player" id="player A"></i>']
    ];

    gameBoard0.join('\n') + '\n\n';


    //Click works!
    $("#Forward").on('click', function() {
      console.log("clicked");
      firstMove();
      secondMove();
      thirdMove();
      fourthMove();
      fithMove();
      sixthMove();
      seventhMove();
      eighthMove();
      ninthMove();
    });

    var moveCount = 0;
        //scope
    $("#go").on('click', function() {
        if (moveCount === 0) {
          firstMove();
          moveCount++;
        }
        else if (moveCount === 1) {
          secondMove();
          moveCount++;
        }
        else if (moveCount === 2) {
          thirdMove();
          moveCount++;
        }
        else if (moveCount === 3) {
          fourthMove();
          moveCount++;
        }
        else if (moveCount === 4) {
          fithMove();
          moveCount++;
        }
        else if (moveCount === 5) {
          sixthMove();
          moveCount++;
        }
        else if (moveCount === 6) {
          seventhMove();
          moveCount++;
        }
        else if (moveCount === 7) {
          eighthMove();
          moveCount++;
        }
        else if (moveCount === 8) {
          ninthMove();
          moveCount++;
        }
    })

    $("#back").on('click', function() {
        if (moveCount === 0) {
          ninthBack();
          moveCount++;
        }
        else if (moveCount === 1) {
          eighthBack();
          moveCount++;
        }
        else if (moveCount === 2) {
          seventhBack();
          moveCount++;
        }
        else if (moveCount === 3) {
          sixthBack();
          moveCount++;
        }
        else if (moveCount === 4) {
          fithBack();
          moveCount++;
        }
        else if (moveCount === 5) {
          fourthBack();
          moveCount++;
        }
        else if (moveCount === 6) {
          thirdBack();
          moveCount++;
        }
        else if (moveCount === 7) {
          secondBack();
          moveCount++;
        }
        else if (moveCount === 8) {
          firstBack();
          moveCount++;
        }
    })

    //move functions exchange elements betwwen different array positions
      function firstMove() {
      if( 2 === 2 ) {

        gameBoard0[4][4] = gameBoard0[6][4];
        gameBoard0[6][4] = ' ';
        gameBoard0.join('\n');
          makeMoves();
          console.log("works");
      }
    }

      function secondMove() {
      if( 2 === 2 ) {

        gameBoard0[2][5] = gameBoard0[0][6];
        gameBoard0[0][6] = ' ';
        gameBoard0.join('\n');
          makeMoves();
          console.log("works2");
      }
    }

      function thirdMove() {
      if( 2 === 2 ) {

        gameBoard0[4][3] = gameBoard0[6][3];
        gameBoard0[6][3] = ' ';
        gameBoard0.join('\n');
          makeMoves();
          console.log("works2");
      }
    }

      function fourthMove() {
      if( 2 === 2 ) {

        gameBoard0[2][4] = gameBoard0[1][4];
        gameBoard0[1][4] = ' ';
        gameBoard0.join('\n');
          makeMoves();
          console.log("works2");
      }
    }

      function fithMove() {
      if( 2 === 2 ) {

        gameBoard0[5][6] = gameBoard0[6][6];
        gameBoard0[6][6] = ' ';
        gameBoard0.join('\n');
          makeMoves();
          console.log("works2");
      }
    }

    function sixthMove() {
    if( 2 === 2 ) {

      gameBoard0[3][3] = gameBoard0[1][3];
      gameBoard0[1][3] = ' ';
      gameBoard0.join('\n');
        makeMoves();
        console.log("works2");
      }
    }
    function seventhMove() {
    if( 2 === 2 ) {

      gameBoard0[6][6] = gameBoard0[7][5];
      gameBoard0[7][5] = ' ';
      gameBoard0.join('\n');
        makeMoves();
        console.log("works2");
      }
    }
    function eighthMove() {
    if( 2 === 2 ) {

      gameBoard0[1][4] = gameBoard0[0][5];
      gameBoard0[0][5] = ' ';
      gameBoard0.join('\n');
        makeMoves();
        console.log("works2");
      }
    }
    function ninthMove() {
    if( 2 === 2 ) {

      gameBoard0[5][5] = gameBoard0[7][6];
      gameBoard0[7][6] = ' ';
      gameBoard0.join('\n');
        makeMoves();
        console.log("works2");
      }
    }


        //moves back

        //move functions exchange elements betwwen different array positions
        //   function firstBack() {
        //   if( 2 === 2 ) {
        //
        //     gameBoard0[6][4] = gameBoard0[4][4];
        //     gameBoard0[4][4] = ' ';
        //     gameBoard0.join('\n');
        //       makeMoves();
        //       console.log("works");
        //   }
        // }
        //
        //   function secondBack() {
        //   if( 2 === 2 ) {
        //
        //     gameBoard0[0][6] = gameBoard0[2][5];
        //     gameBoard0[2][5] = ' ';
        //     gameBoard0.join('\n');
        //       makeMoves();
        //       console.log("works2");
        //   }
        // }
        //
        //   function thirdBack() {
        //   if( 2 === 2 ) {
        //
        //     gameBoard0[6][3] = gameBoard0[4][3];
        //     gameBoard0[4][3] = ' ';
        //     gameBoard0.join('\n');
        //       makeMoves();
        //       console.log("works2");
        //   }
        // }
        //
        //   function fourthBack() {
        //   if( 2 === 2 ) {
        //
        //     gameBoard0[1][4] = gameBoard0[2][4];
        //     gameBoard0[2][4] = ' ';
        //     gameBoard0.join('\n');
        //       makeMoves();
        //       console.log("works2");
        //   }
        // }
        //
        //   function fithBack() {
        //   if( 2 === 2 ) {
        //
        //     gameBoard0[6][6] = gameBoard0[5][6];
        //     gameBoard0[5][6] = ' ';
        //     gameBoard0.join('\n');
        //       makeMoves();
        //       console.log("works2");
        //   }
        // }
        //
        // function sixthBack() {
        // if( 2 === 2 ) {
        //
        //   gameBoard0[1][3] = gameBoard0[3][3];
        //   gameBoard0[3][3] = ' ';
        //   gameBoard0.join('\n');
        //     makeMoves();
        //     console.log("works2");
        //   }
        // }
        // function seventhBack() {
        // if( 2 === 2 ) {
        //
        //   gameBoard0[7][5] = gameBoard0[6][6];
        //   gameBoard0[6][6] = ' ';
        //   gameBoard0.join('\n');
        //     makeMoves();
        //     console.log("works2");
        //   }
        // }
        // function eighthBack() {
        // if( 2 === 2 ) {
        //
        //   gameBoard0[0][5] = gameBoard0[1][4];
        //   gameBoard0[1][4] = ' ';
        //   gameBoard0.join('\n');
        //     makeMoves();
        //     console.log("works2");
        //   }
        // }
        // function ninthBack() {
        // if( 2 === 2 ) {
        //
        //   gameBoard0[7][6] = gameBoard0[5][5];
        //   gameBoard0[5][5] = ' ';
        //   gameBoard0.join('\n');
        //     makeMoves();
        //     console.log("works2");
        //   }
        // }

      //Array Map -----------------------

      function makeMoves() {
        // Row One
      $('#0-1').html(gameBoard0[0][0]);
      $('#0-2').html(gameBoard0[0][1]);
      $('#0-3').html(gameBoard0[0][2]);
      $('#0-4').html(gameBoard0[0][3]);
      $('#0-5').html(gameBoard0[0][4]);
      $('#0-6').html(gameBoard0[0][5]);
      $('#0-7').html(gameBoard0[0][6]);
      $('#0-8').html(gameBoard0[0][7]);

        //Row Two
      $('#1-1').html(gameBoard0[1][0]);
      $('#1-2').html(gameBoard0[1][1]);
      $('#1-3').html(gameBoard0[1][2]);
      $('#1-4').html(gameBoard0[1][3]);
      $('#1-5').html(gameBoard0[1][4]);
      $('#1-6').html(gameBoard0[1][5]);
      $('#1-7').html(gameBoard0[1][6]);
      $('#1-8').html(gameBoard0[1][7]);

        //Row Three
      $('#2-1').html(gameBoard0[2][0]);
      $('#2-2').html(gameBoard0[2][1]);
      $('#2-3').html(gameBoard0[2][2]);
      $('#2-4').html(gameBoard0[2][3]);
      $('#2-5').html(gameBoard0[2][4]);
      $('#2-6').html(gameBoard0[2][5]);
      $('#2-7').html(gameBoard0[2][6]);
      $('#2-8').html(gameBoard0[2][7]);

        //Row Four
      $('#3-1').html(gameBoard0[3][0]);
      $('#3-2').html(gameBoard0[3][1]);
      $('#3-3').html(gameBoard0[3][2]);
      $('#3-4').html(gameBoard0[3][3]);
      $('#3-5').html(gameBoard0[3][4]);
      $('#3-6').html(gameBoard0[3][5]);
      $('#3-7').html(gameBoard0[3][6]);
      $('#3-8').html(gameBoard0[3][7]);

        //Row Five
      $('#4-1').html(gameBoard0[4][0]);
      $('#4-2').html(gameBoard0[4][1]);
      $('#4-3').html(gameBoard0[4][2]);
      $('#4-4').html(gameBoard0[4][3]);
      $('#4-5').html(gameBoard0[4][4]);
      $('#4-6').html(gameBoard0[4][5]);
      $('#4-7').html(gameBoard0[4][6]);
      $('#4-8').html(gameBoard0[4][7]);

        //Row Six
      $('#5-1').html(gameBoard0[5][0]);
      $('#5-2').html(gameBoard0[5][1]);
      $('#5-3').html(gameBoard0[5][2]);
      $('#5-4').html(gameBoard0[5][3]);
      $('#5-5').html(gameBoard0[5][4]);
      $('#5-6').html(gameBoard0[5][5]);
      $('#5-7').html(gameBoard0[5][6]);
      $('#5-8').html(gameBoard0[5][7]);

        //Row Seven
      $('#6-1').html(gameBoard0[6][0]);
      $('#6-2').html(gameBoard0[6][1]);
      $('#6-3').html(gameBoard0[6][2]);
      $('#6-4').html(gameBoard0[6][3]);
      $('#6-5').html(gameBoard0[6][4]);
      $('#6-6').html(gameBoard0[6][5]);
      $('#6-7').html(gameBoard0[6][6]);
      $('#6-8').html(gameBoard0[6][7]);

        //Row Eight
      $('#7-1').html(gameBoard0[7][0]);
      $('#7-2').html(gameBoard0[7][1]);
      $('#7-3').html(gameBoard0[7][2]);
      $('#7-4').html(gameBoard0[7][3]);
      $('#7-5').html(gameBoard0[7][4]);
      $('#7-6').html(gameBoard0[7][5]);
      $('#7-7').html(gameBoard0[7][6]);
      $('#7-8').html(gameBoard0[7][7]);

      }

  }});
