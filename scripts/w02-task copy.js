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


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFoods = ['Fettucini', 'Steak', 'Chicken', 'Shrimp'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favoriteFoods;


// Step 3: Declare and instantiate a variable to hold another single favorite food item.
const newFavoriteFood = 'Ice Cream';

// Step 4: Add the value stored in this new variable to your favorite food array.
favoriteFoods.push(newFavoriteFood);

// Step 5: Append the new array values onto the displayed content of the HTML element with the id of food using a line break.

// Step 6: Remove the first element in the favorite food array.
favoriteFoods.shift();

// Step 7: Append the array output showing the modified array, using a line break.
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Step 8: Remove the last element in the favorite food array.
favoriteFoods.pop();

// Step 9: Append the array output with this final modified favorite foods array.
foodElement.innerHTML += `<br>${favoriteFoods}`;
