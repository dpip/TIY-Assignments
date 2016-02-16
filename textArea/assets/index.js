$("#Typies").keyup(function () {
 var max = 100;
 var length = $(this).val().length;
 var print = document.getElementById("print");
// print.innerHtml=("");
var remains = 100 - length;
$("#print").html(remains + ' characters remaining');

if(length > 100){
       console.log("Getting carried away.");
   }
   else {
        console.log("Let loose!");
   }

});
