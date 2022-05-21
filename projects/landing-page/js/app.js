/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

let sections = document.querySelectorAll('.section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


function createNav(){

     let navUnorderedList = document.getElementById('navbar__list');

     for (let i=1; i<sections.length; i++){
        navLink = document.createElement('a');
        navLink.href = sections[i].href;
    }
        
        for (let i = 0; i < sections.length; i++){
            let navItem = document.createElement('li');
            navUnorderedList.appendChild(navItem);
            navItem.appendChild(navLink);
        }
    }

createNav();






// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


