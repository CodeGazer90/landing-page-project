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

sections.forEach(section => section.classList.add('inView'));


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

    let text = "Section";
        
        for (let i = 0; i < sections.length; i++){
            let navItem = document.createElement('li');
            navItem.classList.add("navbar__items");
            // navItem.style.cssText = "text-decoration: none; color:white";
            let navLink = document.createElement('a');
            navLink.classList.add("inView");
            navLink.classList.add("links");
            navLink.innerHTML =  text + [i+1];
            navLink.href = "#section"+[i+1];
            navItem.appendChild(navLink);
            navUnorderedList.appendChild(navItem);
            
        }
    }

createNav();




// Add class 'active' to section when near top of viewport

function activeSection(){
    
    let viewportHeight = window.innerHeight;
    let viewportWidth = window.innerWidth;
    
    // console.log(viewportHeight, viewportWidth);
    // console.log(view);
    for (let section of sections) {

        let view = section.getBoundingClientRect();

        if (section.classList.contains("inView") && view.top <= viewportHeight && view.bottom >= 0 ){
            section.classList.add('your-active-class');
            section.style.backgroundColor = 'green';
            
        } else{
            section.classList.remove('your-active-class');
            
        } 

    }
    
}

let links = document.querySelectorAll('li');

links.forEach((link) => {
    link.addEventListener('click', () =>{
        links.forEach(link => link.classList.remove('your-active-class'));
        link.classList.add('your-active-class');
    })
})



// window.addEventListener('scroll',activeSection());



// let links = document.querySelectorAll("a");

// links.forEach(link => link.classList.add('your-active-class'));

// links.forEach(link => link.classList.remove('your-active-class'));

// links.classList.contains("inView");








// Scroll to anchor ID using scrollTO event


    

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


