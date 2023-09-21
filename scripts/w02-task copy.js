// Declare and instantiate a variable to hold your name
const fullName = 'Patricia Juarez';

// Declare and instantiate a variable to hold the current year
const currentYear = new Date().getFullYear();

// Declare and instantiate a variable to hold the file path and file name of the image (assuming it's in an "images" folder)
const profilePicture = 'images/profile.png';

// Get HTML element with the id "name" and store it in a const variable named "nameElement"
const nameElement = document.getElementById('name');

// Get HTML element with the id "food" and store it in a const variable named "foodElement"
const foodElement = document.getElementById('food');

// Get HTML element with the id "year" and store it in a variable named "yearElement"
const yearElement = document.querySelector('#year');

// Use any viable method to get the profile image element and store it in a variable named "imageElement"
const imageElement = document.querySelector('img'); // Assumes the profile image is an <img> element

// Assign the nameElement's innerHTML property the fullName variable value, surrounded by <strong> tags
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Set the textContent property of yearElement to the value of the currentYear variable
yearElement.textContent = currentYear;

// Use the setAttribute method to set the src property of the imageElement to the profilePicture variable
imageElement.setAttribute('src', profilePicture);

// Use the setAttribute method to set the alt property of the imageElement
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

// Declare an array variable to hold your favorite foods
const favoriteFoods = ['Pizza', 'Chocolate', 'Sushi'];

// Modify the HTML element with the id "food" to display your favorite foods array
foodElement.innerHTML = favoriteFoods.join('<br>');

// Declare and instantiate a variable to hold another favorite food item
const newFavoriteFood = 'Ice Cream';

// Add the newFavoriteFood to your favorite food array
favoriteFoods.push(newFavoriteFood);

// Remove the first element in the favorite food array
favoriteFoods.shift();

// Remove the last element in the favorite food array
favoriteFoods.pop();

// Append the modified favorite foods array to the displayed content of the HTML element with the id "food"
foodElement.innerHTML = favoriteFoods.join('<br>');
