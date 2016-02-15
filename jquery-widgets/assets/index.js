$( "#sweet" ).on("click", function () {
      alert($(this).text());

      $( "#sweet" ).fadeIn( "slow", function() {
      });
    });
