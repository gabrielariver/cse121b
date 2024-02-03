/* LESSON 3 - Programming Tasks */

/* Profile Object */
let myProfile = {
    name: "Gabriela Rivera",
    photo: "images/profilePicture.png", 
    favoriteFoods: [
      'Paella',
      'Sushi',
      'Ratatouille',
      'Lasagna',
      'Tacos al Pastor'
    ],
    hobbies: [
      'Sing',
      'Dance',
      'Basketball'
    ],
    placesLived: []
  };
  
  /* Populate Profile Object with placesLived objects */
  myProfile.placesLived.push(
    { place: 'Quito, EC', length: '18 years' },
    { place: 'Galápagos, EC', length: '3 years' }
  );
  
  /* DOM Manipulation - Output */
  
  /* Name */
  document.querySelector('#name').textContent = myProfile.name;
  
  /* Photo with attributes */
  document.querySelector('#photo').src = myProfile.photo;
  document.querySelector('#photo').alt = myProfile.name;
  
  /* Favorite Foods List */
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
  