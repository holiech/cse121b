/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Raila Oliech';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/profile.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img'); 


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */

const favoriteFoods = ['Banana', 'Chips', 'Chicken', 'Mangos','Potato salad'];

document.querySelector('#food').textContent = favoriteFoods;
const newFavoriteFood = 'Ice Cream';
// append ice cream
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Remove the first element in the favorite food array.
favoriteFoods.shift();

//Append the array.
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Remove the last element in the favorite food array.
favoriteFoods.pop();

// array output.
foodElement.innerHTML += `<br>${favoriteFoods}`;
