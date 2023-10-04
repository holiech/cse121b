/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};




/* Populate Profile Object with placesLive objects */

myProfile.name = "Raila Oliech";
myProfile.photo = "images/profile.jpg"; // Replace with the actual path to your image
myProfile.favoriteFoods = [
  'Chicken',
  'Chips',
  'Banana',
  'Eggs'
 
];
myProfile.hobbies = ['Reading', 'Hiking', 'Cooking', 'Swimming', 'Dancing']; // Replace with your hobbies
myProfile.placesLived = [];

// Add items to the placesLived array
myProfile.placesLived.push(
    {
      place: 'Nairobi, Kenya',
      length: '15 years'
    }
  );
  
  // Add additional places to the placesLived array
  myProfile.placesLived.push(
    {
      place: 'Arusha, Tanzania',
      length: '3 years'
    },
    {
      place: 'Kampala, Uganda',
      length: '2 years'
    },

    {
        place: 'Adis Ababa, Ethiopia',
        length: '1 year'
      }
    
  );
  
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;

document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
  

