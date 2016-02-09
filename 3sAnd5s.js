var a = (3);
var b = (5);
var count;
var sum = 0;
for (count = 0; count < 1000 ; count++) {

    if (count % a === 0 ) {

        console.log(count);
        sum = count + sum;

    }
        else if (count % b === 0 ) {

        console.log(count);
        sum = count + sum;
    }
        else {


    }
}
console.log(sum)






// while (count <= 1000) {
//     if (count % a === 0, count) {
//         console.log(count);
//     }


// }
