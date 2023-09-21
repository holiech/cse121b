/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Patricia Juarez';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/profile.jpg';





/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

// Use any viable method to get the profile image element and store it in a variable named "imageElement"
const imageElement = document.querySelector('img'); 


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */


const favoriteFoods = ['Pizza', ['Chocolate', 'Chicken'], ['Chips', 'crips', 'Potato salad'],['Banana', 'Orange', 'Mangos'],['Fish','Pork', 'peas']];
foodElement.innerHTML = favoriteFoods.join('<br>');
const newFavoriteFood = 'Ice Cream';

// Add the newFavoriteFood to your favorite food array
favoriteFoods.push(newFavoriteFood);

// Remove the first element in the favorite food array
favoriteFoods.shift();

// Remove the last element in the favorite food array
favoriteFoods.pop();
foodElement.innerHTML = favoriteFoods.join('<br>');





