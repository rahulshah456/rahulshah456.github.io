//@ts-check


//setting imageview sources
document.getElementById('thumb_smartsevak').src = 'https://firebasestorage.googleapis.com/v0/b/walshot-8b648.appspot.com/o/rahulshah456%2F1200_860%2Fsmartsevak.webp?alt=media&token=a870f364-37da-4369-83b5-efe73354026a';
document.getElementById('thumb_pikagames').src = 'https://firebasestorage.googleapis.com/v0/b/walshot-8b648.appspot.com/o/rahulshah456%2F1200_860%2Fpikagames.webp?alt=media&token=8b044543-d08f-44dc-8e37-e2a6456b297f';
document.getElementById('thumb_eklavya').src = 'https://firebasestorage.googleapis.com/v0/b/walshot-8b648.appspot.com/o/rahulshah456%2F1200_860%2Feklavya.webp?alt=media&token=9f5c1d61-f183-493e-b83e-45a7cfda033e';
document.getElementById('thumb_wallset').src = 'https://firebasestorage.googleapis.com/v0/b/walshot-8b648.appspot.com/o/rahulshah456%2F1200_860%2Fwallset.webp?alt=media&token=7c51e646-cf79-4282-aedf-8c4751f8d184';
document.getElementById('thumb_pikabrowser').src = 'https://firebasestorage.googleapis.com/v0/b/walshot-8b648.appspot.com/o/rahulshah456%2F1200_860%2Fbrowser.webp?alt=media&token=d940d5be-7a3c-4c7c-b986-1aa412ba69ff';
document.getElementById('thumb_mentorship').src = 'https://firebasestorage.googleapis.com/v0/b/walshot-8b648.appspot.com/o/rahulshah456%2F1200_860%2Frotated.webp?alt=media&token=c230e226-a5ae-4e01-bb27-556e5926a4ff';
document.getElementById('thumb_inn91').src = 'https://firebasestorage.googleapis.com/v0/b/walshot-8b648.appspot.com/o/rahulshah456%2F1200_860%2Finn91.webp?alt=media&token=2b2606f6-8fd9-4b1c-a974-8651856ddfe3';
document.getElementById('thumb_mlnavigation').src = 'https://firebasestorage.googleapis.com/v0/b/walshot-8b648.appspot.com/o/rahulshah456%2F1200_860%2Fmlnavigation.webp?alt=media&token=20966e00-4934-4889-a1d0-e13c03b7b50f';
document.getElementById('thumb_liveslider').src = 'https://firebasestorage.googleapis.com/v0/b/walshot-8b648.appspot.com/o/rahulshah456%2F1200_860%2Fliveslider.webp?alt=media&token=097223c9-a421-4ad4-bc6a-dfa50c48277c';
document.getElementById('thumb_portfolio').src = 'https://firebasestorage.googleapis.com/v0/b/walshot-8b648.appspot.com/o/rahulshah456%2F1200_860%2Fportfolio.webp?alt=media&token=524452ec-2bf4-49e7-b6e3-fd499bbdb8c1';


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
function isPortrait() {
  ///return (screen.orientation.angle == 0 || screen.orientation.angle == 180);
  return screen.width < screen.height;
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