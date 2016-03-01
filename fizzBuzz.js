// "Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."


var c = (15);
var b = (5);
var a = (3);
var count;
for (count = 0; count <= 100; count ++) {

       if (count % c === 0) {

        console.log("FizzBuzz");
    }

    else if (count % a === 0 ) {
        console.log("Fizz" );
    }
    else if (count % b === 0 ) {
        console.log("Buzz");

    }
    else {
        console.log(count);
    }

}
