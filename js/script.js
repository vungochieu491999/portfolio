const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', function () {
    const mobileMenu = this.querySelector('.mobile-menu-btn');
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "inline-block"
        menu.style.display = "none"
    }
    else if(menu.style.display === "none") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
});

function showSection(sectionId) {
// Hide all sections
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.style.display = 'none';
});

// Show the selected section
const activeSection = document.getElementById(sectionId);
if (activeSection) {
    activeSection.style.display = 'block';
}

const hamburger = document.getElementById('hamburger');
const hamburgerDisplay = window.getComputedStyle(hamburger).display;
if (hamburgerDisplay === "none") {
    menu.style.display = "block"
} else {
    menu.style.display = "none"
}
}

// Set default section to display
document.addEventListener('DOMContentLoaded', () => {
showSection('home');
});