/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Gabriela Rivera"; 
const currentYear = "2024"; 
const profilePicture = "images/profilePicture.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`; 
yearElement.textContent = currentYear; 

const imgElement = document.querySelector("img");
imgElement.setAttribute('src', profilePicture);
imgElement.setAttribute('alt', `Profile image of ${fullName}`);
imgElement.setAttribute('width', "225px");
imgElement.setAttribute('height', "300px");

/* Step 5 - Array */
const foodArray = ["Scrambled eggs", "Mashed potatoes", "Meatballs", "Stew", "Roast beef", "Soup"];
foodElement.innerHTML = foodArray.join(', ');
const anotherFavFood = "Salad"; 
foodArray.push(anotherFavFood);
foodElement.innerHTML += '<br>' + foodArray.join(', ');
foodArray.shift();
foodElement.innerHTML += '<br>' + foodArray.join(', ');
foodArray.pop();
foodElement.innerHTML += '<br>' + foodArray.join(', ');






