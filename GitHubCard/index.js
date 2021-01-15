  /*  for the understanding purpose follow the steps in this order.
    1. Step 2 (understand the DOM structure using the example-preview.png )
    2. Step 3 (built the component)
    3. Step 1 (use the axios to get the request and make the scafolding ready)
    4. Step 4 (pass the data that was created in the component 
       set up with Step 3, do the querySelector, append it)
    5. Step 5 (buid and array and iterate over it.)
  */

  /*  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
  */

  /*  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
  */

  /*    STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
  */

  /*  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
  */

  /*  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
  */

//<------------- Step 1 ------------>
import axios from 'axios'; //importing the axios before step 1

//<------------- Step 1 & 4 ------------>
axios
.get("https://api.github.com/users/ShahJalpa")
.then((response) => {
  const jalpaGitData = cardMaker(response.data);
  console.log(response.data);
  const card = document.querySelector('.cards');
  card.appendChild(jalpaGitData)
  console.log(response.data);
})
.catch((error) => {
  console.log("somethig wrong", error);
})


const followersArray = ['rodhent', 'BrityHemming', 'emmac124', 'chrismjohnston', 'lisabpink'];

followersArray.forEach(follower =>{
  axios
  .get(`https://api.github.com/users/${follower}`)
  .then((response) => {
    const arrayData = cardMaker(response.data);
    const card = document.querySelector('.cards');
    console.log(arrayData);
    card.appendChild(arrayData);
  })
})

//<------------- Step 2 & 3 ------------>

function cardMaker(data){
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const login = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  console.log(cardMaker);

  /*    STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
  */

  //structure setup into HTML format shown above (parent-child setup)
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(login);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  //profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  //structure setup according to HTML class tag
  card.classList.add('card');
  card.classList.add('card-info');
  name.classList.add('name');
  login.classList.add('username');

  //text content set up
  img.setAttribute('src', data.avatar_url);
  name.textContent = data.name;
  login.textContent = data.login;
  location.textContent = `Location: ${data.location}`;
  profile.textContent = `Profile: `;

  profile.appendChild(profileLink);
  profileLink.setAttribute('href', data.html_url);
  profileLink.textContent = data.html_url;

  followers.textContent = `Follower: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;

  console.log(data.userImgUrl);

  //return the card component
  return card;

}





//<------------- Step 5 ------------>




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
