const button1 = document.getElementById('b1');
const academic = document.getElementById('academic');

button1.addEventListener('click', () => {
    if (academic.style.display === 'none' || academic.style.display === '') {
        academic.style.display = 'block';
    } else {
        academic.style.display = 'none';
    }
})

const button2 = document.getElementById('b2');
const skills = document.getElementById('skills');

button2.addEventListener('click', () => {
    if (skills.style.display === 'none' || skills.style.display === '') {
        skills.style.display = 'block';
    } else {
        skills.style.display = 'none';
    }
})

const button3 = document.getElementById('b3');
const curriculum = document.getElementById('curriculum');

button3.addEventListener('click', () => {
    if (curriculum.style.display === 'none' || curriculum.style.display === '') {
        curriculum.style.display = 'block';
    } else {
        curriculum.style.display = 'none';
    }
})

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav1") {
        x.className += " responsive";
    } else {
        x.className = "nav1";
    }
}


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {

        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        link.classList.add('active');
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav1") {
        x.className += " responsive";
    } else {
        x.className = "nav1";
    }
}


// Function to toggle the menu
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    var menuIcon = document.getElementById("menu-icon");

    if (x.className === "nav1") {
        x.className += " responsive";
        menuIcon.classList.add("cross"); // Add the "cross" class
    } else {
        x.className = "nav1";
        menuIcon.classList.remove("cross"); // Remove the "cross" class
    }
}
