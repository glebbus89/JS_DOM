// localStorage.setItem('user', 'xl984')
// console.log(localStorage.getItem('user'));
// localStorage.removeItem('user');
// localStorage.setItem('user1', 'xl984')
// localStorage.setItem('user2', 'xl984')
// localStorage.clear();
// localStorage.admin = {name:"bob"}
// localStorage.admin = JSON.stringify({name:"bob"});
// console.log(JSON.parse(localStorage.admin));

import { initializeTheme, switchTheme } from "./theme.js";
import { fetchRepos } from "./api.js";

const userNameInput = document.querySelector('.usernameInput');
const searchButton = document.querySelector('.searchButton');
const reposContainer = document.querySelector('.repos');
const favouritesContainer = document.querySelector('.favourites');
const themeSwitcher = document.querySelector('.themeSwitcher');
initializeTheme();

themeSwitcher.addEventListener('click', switchTheme);

const favouritesKey = 'favourites'

searchButton.addEventListener('click', async() => {
    const userName = userNameInput.value
    if(userName) {
        try {
            const repos = await fetchRepos(userName)
            displayRepos(repos)
        } catch (error) {
            alert(error.message)
        }
    } 
})

function displayRepos(repos) {
    reposContainer.innerHTML = ''
    repos.forEach(repo => {
        const isFavouritedRepo = isFavourited(repo.id)
        reposContainer.insertAdjacentHTML('beforeend', `
        <div class="repo-card">
            <h3>${repo.name}</h3>
            <button class="fav-button ${isFavouritedRepo ? 'favourited' : ''}" data-repo-id="${repo.id}">
                ${isFavouritedRepo ? 'Unfavourite' : 'Favourite'}
            </button>
        </div>
        `)
    });
    document.querySelectorAll('.fav-button').forEach((button) => {
        button.addEventListener('click', () => {
            const repoId = button.getAttribute('data-repo-id')
            const repo = repos.find((r) => r.id == repoId)
            toggleFavourite(repo)
            button.classList.toggle('favourited')
            button.textContent = button.classList.contains('favourited') ? 'Unfavourite' : "Favourite"
        })
    })
}
function toggleFavourite(repo){
    const favourites = getFavourites()
    const index = favourites.findIndex((fav) => fav.id === repo.id)
    if(index === -1){
        favourites.push(repo)
    } else {
        favourites.splice(index, 1)
    }
}


function isFavourited(repoId){
    const favourites = getFavourites();
    return favourites.some((fav)=>fav.id === repoId)
}

function getFavourites() {
    return JSON.parse(localStorage.getItem(favouritesKey)) || []
}

function displayFavourites(){
    favouritesContainer.innerHTML = ''
    const favourites = getFavourites()
    favourites.forEach((repo) => {
        favouritesContainer.insertAdjacentElement('beforeend', `
        <li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
        `)
    })
}

document.addEventListener('DOMContentLoaded', displayFavourites)



