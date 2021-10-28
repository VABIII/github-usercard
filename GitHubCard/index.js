import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/VABIII")
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.error(err)
    })

const entry = document.querySelector(".cards")


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

function Git_Card(obj) {

    const card = document.createElement("div").classList.add("card");
    const img = document.createElement("img");
    const card_info = document.createElement("div").classList.add("card-info");
    const name = document.createElement("h3").classList.add("name");
    const username = document.createElement("p").classList.add("username");
    const location = document.createElement("p");
    const profile = document.createElement("p");
    const address = document.createElement("a");
    const followers = document.createElement("p");
    const following = document.createElement("p");
    const bio = document.createElement("p");



    return null;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
