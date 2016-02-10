// Add a script tag in the appropriate place. DONE
// Using JavaScript, change the body's tag style so it has a font-family of the sans-serif font stack of your choice. DONE
// Using JavaScript, replace each of the spans with your own information. CHECK
// Iterate through each li and change the class to listitem. Add a style tag that sets a rule for listitem to make the color red.CHECK
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.




var font = document.querySelector("body");
font.style.fontFamily = "Arial";

var fullName = document.getElementById("fullname");
fullName.textContent = "Daniel Pipkin";

var homeTown = document.getElementById("hometown");
homeTown.textContent = "Benson, NC";

var favoriteMovie = document.getElementById("movie");
favoriteMovie.textContent = "The Princess' Bride";

var favoriteFood = document.getElementById("food");
favoriteFood.textContent = "Thai Curry";

var list = document.getElementsByTagName("li");
list.className = "listitem";

var photo = document.getElementById("image");
photo.src = "IMG_1765.jpg";

for (item = 0; item < list.length; item++) {
  list[item].className = "listitem";
  list[item].style.color = "red";

}





// var imageParent = document.getElementById("body");
// image.id = "id";
// image.className = "class";

// imageParent.appendChild(image);
// document.getElementById["#pic1"].src = "IMG_1765.jpg";
