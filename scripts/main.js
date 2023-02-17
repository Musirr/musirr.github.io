const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const newHeading = document.querySelector("h1");
newHeading.textContent = "New York Fashion Week";
 
delete(newHeading);
console.log(myHeading);