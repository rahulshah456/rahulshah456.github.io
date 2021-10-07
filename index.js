//@ts-check

function isPortrait() {
  ///return (screen.orientation.angle == 0 || screen.orientation.angle == 180);
  return screen.width < screen.height;
}

document.addEventListener('DOMContentLoaded', configureProjectDimensions, false);
window.addEventListener('resize', configureProjectDimensions, true);




function configureProjectDimensions() {
  var projects = document.querySelectorAll(".project");
  projects.forEach(project => {
    var counter_view = project.querySelector(".project_img_overlay");
    var img_container = project.querySelector(".project_container_img");

    var descChips = project.querySelector(".chips_container");
    var descHeader = project.querySelector(".project_desc_header");
    var descLinks = project.querySelector(".project_desc_links");
    

    let chipsStyle = getComputedStyle(descChips);
    let headerStyle = getComputedStyle(descHeader);
    let linksStyle = getComputedStyle(descLinks);

    let imgStyle = getComputedStyle(img_container);

    let descHeight = parseInt(chipsStyle.height) + parseInt(headerStyle.height) + parseInt(linksStyle.height);
    let imgHeight = parseInt(imgStyle.height);
    
    counter_view.style.height = chipsStyle.height;

    if(!isPortrait()) {
      let top = Math.abs((imgHeight-descHeight)/2) + parseInt(headerStyle.height);
      counter_view.style.marginTop = `${top}px`;
    } else {
      counter_view.style.margin = "auto";
    }
    
  });
}



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