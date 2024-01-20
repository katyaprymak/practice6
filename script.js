//function with no parameters
function startMyDay() {
  return "Time for coffee and shower!";
}
console.log(startMyDay());

//function with one parameter
function favoriteCookie(cookie) {
  return `My favorite cookie is ${cookie}.`;
}
console.log(favoriteCookie());
console.log(favoriteCookie("oatmeal raisin"));

//function with two parameters
function introduce(name, occupation) {
  return `My name is ${name} and I'm a ${occupation}`;
}

console.log(introduce("Katya", "Front-end developer"));
console.log(introduce("Katya", "DJ"));

//function with prompt and conditional
function hydrationFeedback() {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today")
  );
  if ((numGlasses) => 8) {
    alert("Congratulations!");
  } else if (numGlasses < 8) {
    alert("Not bad, not bad. Let’s try for a bit more tomorrow!");
  }
}

hydrationFeedback();
