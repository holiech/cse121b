/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
      const article = document.createElement("article");
      const h3 = document.createElement("h3");
      h3.textContent = temple.templeName + "Temple";
      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = temple.location;
      article.appendChild(h3);
      article.appendChild(img);
      templesElement.appendChild(article);
    });
  };



/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList.length = 0; // Clear the existing templeList
    templeList.push(...await response.json()); // Add new data to templeList
    displayTemples(templeList); // Display the temples
  };
  
/* reset Function */

const reset = () => {
    templesElement.innerHTML = ""; // Clear all temple articles
  };
/* sortBy Function */

// Function: sortBy
const sortBy = (temples) => {
    reset(); // Clear the displayed list of temples
    const filter = document.querySelector("#sortBy").value;
  
    switch (filter) {
      case "utah":
        const utahTemples = temples.filter((temple) =>
          temple.location.toLowerCase().includes("utah")
        );
        displayTemples(utahTemples);
        break;
  
      case "notutah":
        const nonUtahTemples = temples.filter((temple) =>
          !temple.location.toLowerCase().includes("utah")
        );
        displayTemples(nonUtahTemples);
        break;
  
      case "older":
        const oldTemples = temples.filter((temple) =>
          new Date(temple.dedicated) < new Date(1950, 0, 1)
        );
        displayTemples(oldTemples);
        break;
  
      case "all":
        displayTemples(temples);
        break;
  
      default:
        // Handle unknown filter value or any other cases
        console.log("Unknown filter: " + filter);
        break;
    }
  };
  
  

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

// Test code
getTemples();