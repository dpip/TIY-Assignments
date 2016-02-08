var cars= ["Hummer", "BMW", "Mercedes", "Mazda", "Honda" ];

// 1. sort
console.log(cars);
cars.sort();

// 2. concat
var mpg= ["omg", "bad", "ok", "pretty good", "great" ];
var carsMpg = cars.concat(mpg);
console.log(carsMpg);

// 3. indexof
cars.indexOf("Hummer");

// 4. split
var catchUp= ("The hummer would squash the Honda if it could actually catch it.");
var catchUp= catchUp.split(" ");
console.log(catchUp);
// 5. join
var joinMpg = cars.join();
var joinCars = mpg.join(" , ");
console.log(joinCars);

// 6. pop
var popped = cars.pop("Hummer", "Honda");
console.log(popped);
// 7. push
var total = cars.push("Porsche");
console.log(cars);

// 8. slice
var cheap = cars.slice(1, 2);
console.log(cheap);

// 9. splice
var iGuessthatIsaCar = cars.splice(4);
console.log(iGuessthatIsaCar);


// 10. shift
console.log(cars);
var fancy = cars.shift("BMW", + cars);
console.log(fancy);


// 11. unshift
console.log(cars);
cars.unshift("BMW");
console.log(cars);

// 12. filter

function goodMpg(value) {
  return value >= 25;
}
var milesPer = [30, 12, 40, 23, 44].filter(goodMpg);
console.log(milesPer);
// 13. map
console.log(milesPer);
var speeding = milesPer.map(function(num) {
  return num - 7;
});
console.log(speeding);
