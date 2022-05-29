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
let links = document.querySelectorAll('li');




// 

/**
 * End Global Variables

 * Begin Main Functions
 * 
*/

// building the navigation bar by creating a for loop that will create a list item, five it the class navbar__items, creating a tag and giving it two classes of "inView" and "links". The innerHTML and href for the links are created dynamically so that when ever a new section is added, they will be automatically added to the nav bar. Lastly, the links are appended to the li and the li is appended to the UL.


function createNav(){
    
    let navUnorderedList = document.getElementById('navbar__list');

    let text = "Section";
        
        for (let i = 0; i < sections.length; i++){
            let navItem = document.createElement('li');
            navItem.classList.add("navbar__items");
            navItem.classList.add("section"+[i+1]);
            let navLink = document.createElement('a');
            // navLink.classList.add("inView");
            navLink.classList.add("links");
            navLink.innerHTML =  text + [i+1];
            navLink.href = "#section"+[i+1];
            navItem.appendChild(navLink);
            navUnorderedList.appendChild(navItem);
            
        }
        

    }

createNav();

// making the sections active when scrolled into the viewport and turning it green

window.addEventListener("scroll", function () {
    let viewportHeight = window.innerHeight;
    let viewportWidth = window.innerWidth;
    // console.log(viewportHeight, viewportWidth);
    // console.log(view);
  
    for (let section of sections) {
      let view = section.getBoundingClientRect();
  
      if (view.top >= 0 && view.left >= 0 && view.right <= viewportWidth  && view.bottom <= viewportHeight) {
        // section.classList.add("inView");
        section.classList.add("your-active-class");
        section.style.backgroundColor = "green";
  
        let links = document.querySelectorAll("li");
        
        links.forEach((link) => {
            let linkClasses = link.classList;
            let sectionId = section.getAttribute("id");
            
            if (linkClasses.contains(sectionId)){
              link.classList.add("your-active-class");
            } else {
              link.classList.remove("your-active-class");
              // section.classList.remove("inView");
             
            }
          });
      } else{
        section.classList.remove('your-active-class');
        section.style.backgroundColor = null;
    }
      
    }
  });


// function scrollToSection(event){
//     for (let link of links){
//         event.preventDefault();
//         link.scrollIntoView({ behavior: 'smooth'});
//     }
// };

// let navUnorderedList = document.getElementById('navbar__list');

// navUnorderedList.addEventListener('click',scrollToSection());
