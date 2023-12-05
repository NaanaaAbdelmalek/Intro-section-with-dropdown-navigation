
const hamburger = document.querySelector(".hamburger");
const closemenu = document.querySelector(".close-menu");

const PrimarySideDropdown = document.querySelector(".side-primary-dropdown");
const SecondarySideDropdown = document.querySelector(".side-secondary-dropdown");


const PrimaryDropdown = document.querySelector(".primary-dropdown");
const SecondaryDropdown = document.querySelector(".secondary-dropdown");

const PrimaryNavDropdown = document.querySelector(".nav-primary-dropdown");
const SecondaryNavDropdown = document.querySelector(".nav-secondary-dropdown");



// Opening the mobile Side bar
function OpenSideBar() {
    document.querySelector(".side-bar").style.left = "36%";
    document.querySelector(".side-bar").style.boxShadow = "0 0 0 10000px rgba(0,0,0,.75)"
}

// Closing the mobile Side bar
function CloseSideBar() {
    document.querySelector(".side-bar").style.left = "100%";
    document.querySelector(".side-bar").style.boxShadow = "none"

    if (!PrimaryDropdown.classList.contains("hide")) {
        PrimaryArrow.src = "images/icon-arrow-down.svg";
        PrimaryDropdown.classList.toggle("hide");
    }
    if (!SecondaryDropdown.classList.contains("hide")) {
        SecondaryArrow.src = "images/icon-arrow-down.svg";
        SecondaryDropdown.classList.toggle("hide");
    }
}

// Toggling the dropdown inside the Side bar
function PrimaryDropdown_toggle() {

    const PrimaryArrow = document.querySelector(".primary-arrow");

    if (!PrimaryDropdown.classList.contains("hide")) {
        PrimaryArrow.src = "images/icon-arrow-down.svg";
        PrimaryDropdown.classList.toggle("hide");
    } else {
        PrimaryArrow.src = "images/icon-arrow-up.svg";
        PrimaryDropdown.classList.toggle("hide");
    }
}

// Toggling the dropdown inside the Side bar
function SecondaryDropdown_toggle() {

    const SecondaryArrow = document.querySelector(".secondary-arrow");

    if (!SecondaryDropdown.classList.contains("hide")) {
        SecondaryArrow.src = "images/icon-arrow-down.svg";
        SecondaryDropdown.classList.toggle("hide");
    } else {
        SecondaryArrow.src = "images/icon-arrow-up.svg";
        SecondaryDropdown.classList.toggle("hide");
    }
}

// Toggling the desktop navbar dropdown
function NavbarPrimaryDropdown_toggle() {

    const PrimaryArrow = document.querySelector(".navbar-primary-arrow");

    if (!PrimaryNavDropdown.classList.contains("active")) {

        PrimaryArrow.src = "images/icon-arrow-up.svg";
        document.querySelector(".navbar-primary-dropdown").classList.toggle("hide");
        PrimaryNavDropdown.classList.add("active")

    } else {
        document.querySelector(".navbar-primary-dropdown").classList.toggle("hide");
        PrimaryArrow.src = "images/icon-arrow-down.svg";
        PrimaryNavDropdown.classList.remove("active")
    }

}

// Toggling the desktop navbar dropdown
function NavbarSecondaryDropdown_toggle() {

    const SecondaryArrow = document.querySelector(".navbar-secondary-arrow");

    if (!SecondaryNavDropdown.classList.contains("active")) {
        SecondaryArrow.src = "images/icon-arrow-up.svg";
        document.querySelector(".navbar-secondary-dropdown").classList.toggle("hide");
        SecondaryNavDropdown.classList.add("active")
    } else {
        document.querySelector(".navbar-secondary-dropdown").classList.toggle("hide");
        SecondaryArrow.src = "images/icon-arrow-down.svg";
        SecondaryNavDropdown.classList.remove("active")
    }
}

// to be done close the desktop  dropdown if clicked anywhere in the document

// document.addEventListener("click", (e) => {

//     const NavbarPrimaryDropdown = document.querySelector(".navbar-primary-dropdown");
//     let etarget = e.target;

//     if (etarget !== NavbarPrimaryDropdown && etarget !== PrimaryNavDropdown) {
        
//         NavbarPrimaryDropdown.classList.add("hide");
//         PrimaryNavDropdown.classList.remove("active");
//     }

// });


// All the events listners
hamburger.addEventListener("click", OpenSideBar);
closemenu.addEventListener("click", CloseSideBar);

PrimarySideDropdown.addEventListener("click", PrimaryDropdown_toggle);
SecondarySideDropdown.addEventListener("click", SecondaryDropdown_toggle);

PrimaryNavDropdown.addEventListener("click", NavbarPrimaryDropdown_toggle);
SecondaryNavDropdown.addEventListener("click", NavbarSecondaryDropdown_toggle);








