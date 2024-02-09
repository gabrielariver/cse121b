/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples'); 
let templeList = [];

/* displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
      const article = document.createElement('article');
      const h3 = document.createElement('h3');
      h3.textContent = temple.templeName;
      const img = document.createElement('img');
      img.src = temple.imageUrl;
      img.alt = temple.location;
      article.appendChild(h3);
      article.appendChild(img);
      
      templesElement.appendChild(article);
    });
  };  

/* getTemples Function using fetch() */
const getTemples = async () => {
  const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
  templeList = await response.json();
  displayTemples(templeList);
};

/* reset Function */
const reset = () => {
  while (templesElement.firstChild) {
    templesElement.removeChild(templesElement.firstChild);
  }
};

/* filterTemples Function */
const sortBy = () => {
  const filter = document.getElementById('filtered').value;
  reset();
  
  switch (filter) {
    case 'utah':
      displayTemples(templeList.filter(temple => temple.location.includes('Utah')));
      break;
    case 'notutah': 
      displayTemples(templeList.filter(temple => !temple.location.includes('Utah')));
      break;
    case 'older':
      displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case 'all':
    default:
      displayTemples(templeList);
      break;
  }
};

getTemples(); 

/* Event Listener */
document.getElementById('filtered').addEventListener('change', sortBy);
