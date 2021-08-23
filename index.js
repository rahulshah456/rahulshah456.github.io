
//@ts-check

const navMobileMenus = document.querySelectorAll(".nav__mobile  .nav__link");

navMobileMenus.forEach(navMobileMenu => {
  navMobileMenu.addEventListener("click", event => {
    navMobileMenus.forEach(menu => {
      if(menu.classList.contains("nav__link--active")) {
        menu.classList.remove("nav__link--active");
      }
    });
    navMobileMenu.classList.add("nav__link--active");
  });
});




const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
       currentlyActiveAccordionItemHeader.classList.toggle("active");
       currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
     }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});



const projectCards = document.querySelectorAll(".project__card");
var activeCard = -1;

projectCards.forEach( (cards,index) => {

	cards.addEventListener('mouseenter', () => {
    
    if(activeCard != index) {

      //hide info view from any other active cards
      projectCards.forEach( otherCard => {
        otherCard.getElementsByTagName('img')[0].style.filter = "blur(0px)";
        otherCard.getElementsByClassName('project_card--info')[0].style.width = "0%";
        if(otherCard.getElementsByClassName('project_card--desc')[0].style.display != "none") {
          otherCard.getElementsByClassName('project_card--desc')[0].style.display = "none";
        }
      })

      //show the info view to current view
      cards.getElementsByTagName('img')[0].style.filter = "blur(8px)";
      const infoCard = cards.getElementsByClassName('project_card--info')[0];
      infoCard.style.width = "90%";
      infoCard.addEventListener('transitionend', () => {
        if(cards.getElementsByClassName('project_card--desc')[0].style.display != "flex") {
          cards.getElementsByClassName('project_card--desc')[0].style.display = "flex";
        }
      })

      activeCard = index;
    }
	});
});