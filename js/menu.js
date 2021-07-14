// header

let hamburgerIcon = document.querySelector("#hamburger-icon");
let sideMenu = document.querySelector(".side-bar-menu");
let closeSideMenuButton = document.querySelector(".close-sidemenu-button");

let exploreMoreArrowButton = document.querySelector(".explore-more-arrow");
let dropDownMenu = document.querySelector(".drop-down-menu-list");

let exploreMoreSideMenuButton = document.querySelector(".explore-more-arrow-sidemenu");
let sideMenuDropDownMenu = document.querySelector(".side-bar-drop-down-menu-list");


function openSideMenu() {
    sideMenu.classList.add('show-side-menu');
}

function closeSideMenu() {
    sideMenu.classList.remove('show-side-menu');
}

hamburgerIcon.addEventListener("click", openSideMenu);
closeSideMenuButton.addEventListener("click", closeSideMenu);


function openExploreMore() {
    dropDownMenu.classList.toggle('show');
}

exploreMoreArrowButton.addEventListener("click", openExploreMore);


function openExploreMoreSideMenuDropdown() {
    sideMenuDropDownMenu.classList.toggle('show-side-menu-dropdown');
}

exploreMoreSideMenuButton.addEventListener("click", openExploreMoreSideMenuDropdown);

// MODAL

let submitButton = document.querySelector(".submit-button");
let modal = document.querySelector(".modal");
let closeModalButton = document.querySelector("#close-modal");

let orderName = document.querySelector("#name").value;
let phoneNumber = document.querySelector("#phonenumber").value;
let order = document.querySelector("#order").value;
let error = document.querySelector(".error");


function openModal() {
    modal.classList.add('open-modal');
}

function closeModal() {
    modal.classList.remove('open-modal');
}

submitButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

// submitButton.addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     orderName.trim();

//     if (orderName.length < 0 || phoneNumber < 0 || order < 0) {
//         error.classList.add('show-error');
//     }
// });

