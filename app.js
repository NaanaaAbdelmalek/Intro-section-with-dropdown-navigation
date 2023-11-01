
const hamburger = document.querySelector(".hamburger");
const closemenu = document.querySelector(".close-menu");

const PrimaryArrow = document.querySelector(".primary-arrow");
const SecondaryArrow = document.querySelector(".secondary-arrow");

const PrimaryDropdown = document.querySelector(".primary-dropdown")
const SecondaryDropdown = document.querySelector(".secondary-dropdown")

function OpenSideBar() {

    document.querySelector(".side-bar").style.left = "36%";
    document.querySelector(".side-bar").style.boxShadow = "0 0 0 10000px rgba(0,0,0,.75)"
}

function CloseSideBar() {

    document.querySelector(".side-bar").style.left = "100%";
    document.querySelector(".side-bar").style.boxShadow = "none"

    if (!PrimaryDropdown.classList.contains("hide")){
        PrimaryArrow.src = "images/icon-arrow-down.svg";
        PrimaryDropdown.classList.toggle("hide");
    }
    if (!SecondaryDropdown.classList.contains("hide")){
        SecondaryArrow.src = "images/icon-arrow-down.svg";
        SecondaryDropdown.classList.toggle("hide");
    }
}

function PrimaryDropdown_toggle() {

    if (!PrimaryDropdown.classList.contains("hide")){
        PrimaryArrow.src = "images/icon-arrow-down.svg";
        PrimaryDropdown.classList.toggle("hide");
    } else {
        PrimaryArrow.src = "images/icon-arrow-up.svg";
        PrimaryDropdown.classList.toggle("hide");
    }   
}

function SecondaryDropdown_toggle() {

    if (!SecondaryDropdown.classList.contains("hide")){
        SecondaryArrow.src = "images/icon-arrow-down.svg";
        SecondaryDropdown.classList.toggle("hide");
    } else {
        SecondaryArrow.src = "images/icon-arrow-up.svg";
        SecondaryDropdown.classList.toggle("hide");
    }
}


hamburger.addEventListener("click", OpenSideBar);
closemenu.addEventListener("click", CloseSideBar);

PrimaryArrow.addEventListener("click", PrimaryDropdown_toggle);
SecondaryArrow.addEventListener("click", SecondaryDropdown_toggle);










