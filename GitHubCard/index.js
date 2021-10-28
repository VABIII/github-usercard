import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name> */

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

const entry = document.querySelector(".cards")

const followersArray = [
    "tetondan",
    "dustinmyers",
    "justsml",
    "luishrd",
    "bigknell"
];

function Git_Card({avatar_url, name, login, location, html_url, followers, following, bio}) {

    const card = document.createElement("div");
    const img = document.createElement("img");
    const card_info = document.createElement("div")
    const names = document.createElement("h3")
    const username = document.createElement("p")
    const locations = document.createElement("p");
    const profile = document.createElement("p");
    const address = document.createElement("a");
    const followerss = document.createElement("p");
    const followings = document.createElement("p");
    const bios = document.createElement("p");

    card.classList.add("card");
    card_info.classList.add("card-info");
    img.src = avatar_url;
    names.classList.add("name");
    names.textContent = name;
    username.textContent = login;
    locations.textContent = location;
    locations.classList.add("username");
    profile.textContent = `Profile: `;
    address.href = html_url;
    address.textContent = html_url;
    followerss.textContent = followers;
    followings.textContent = following;
    bios.textContent = bio;

    card.appendChild(img);
    card.appendChild(card_info);
    card_info.append(names, username, locations, profile, followerss, followings, bios);
    profile.appendChild(address)

    return card;
}

function get(login, entry_point) {
    axios.get(`https://api.github.com/users/${login}`)
        .then(res => {
            entry_point.appendChild(Git_Card(res.data))
        })
        .catch(err => {
            console.error(err)
        })
}

function Fuckers(names, entry_point) {
    names.forEach(name => {
        axios.get(`https://api.github.com/users/${name}`)
            .then(res => {
                entry_point.appendChild(Git_Card(res.data))
            })
            .catch(err => {
                console.error(err)
            })
    })
}

get("VABIII", entry)

Fuckers(followersArray, entry);