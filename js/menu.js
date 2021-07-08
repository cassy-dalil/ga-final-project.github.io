// header

let hamburgerIcon = document.querySelector("#hamburger-icon");
let sideMenu = document.querySelector(".side-bar-menu");
let closeSideMenuButton = document.querySelector(".close-sidemenu-button")

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