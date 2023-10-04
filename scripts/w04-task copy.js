/* LESSON 3 - Programming Tasks */

/* Profile Object  */




/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */
// Declare a new object literal variable named myProfile and assign an empty object to it
let myProfile = {};

// Add properties to the myProfile object
myProfile.name = "Raila Oliech";
myProfile.photo = "images/profile.jpg"; // Replace with the actual path to your image
myProfile.favoriteFoods = [
  'Rice',
  'Tikka Masala',
  'Prioshki',
  'Shrimp',
  'Banana Cream Pie'
];
myProfile.hobbies = ['Reading', 'Hiking', 'Cooking']; // Replace with your hobbies
myProfile.placesLived = [];

// Add items to the placesLived array
myProfile.placesLived.push(
  {
    place: 'San Francisco, CA',
    length: '1 year'
  }
);

// Add additional places to the placesLived array
myProfile.placesLived.push(
  {
    place: 'New York, NY',
    length: '3 years'
  },
  {
    place: 'Los Angeles, CA',
    length: '2 years'
  }
);

// DOM Manipulation

// Assign the value of the name property to the HTML element with an ID of 'name'
document.querySelector('#name').textContent = myProfile.name;

// Assign the value of the photo property as the src attribute of the HTML <img> with an ID of 'photo'
document.querySelector('#photo').src = myProfile.photo;

// Assign the value of the name property as the alt attribute of the HTML <img> with an ID of 'photo'
document.querySelector('#photo').alt = myProfile.name;

// Create a list of favorite foods
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

// Create a list of hobbies
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

// Create a list of places lived
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;

  let dd = document.createElement('dd');
  dd.textContent = place.length;

  document.querySelector('#places-lived').appendChild(dt);
  document.querySelector('#places-lived').appendChild(dd);
});

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


