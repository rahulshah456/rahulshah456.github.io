
const BASE_URL = 'https://firebasestorage.googleapis.com/v0/b/walshot-8b648.appspot.com/o/rahulshah456%2F1200_860%2F';

//preview projects
document.getElementById('thumb_smartsevak').src = `${BASE_URL}smartsevak.webp?alt=media`;
document.getElementById('thumb_pikagames').src = `${BASE_URL}pikagames.webp?alt=media`;
document.getElementById('thumb_eklavya').src = `${BASE_URL}eklavya.webp?alt=media`;
document.getElementById('thumb_wallset').src = `${BASE_URL}wallset.webp?alt=media`;

//other projects
if (document.getElementById('thumb_pikabrowser') != null) {
  document.getElementById('thumb_pikabrowser').src = `${BASE_URL}browser.webp?alt=media`;
}
if (document.getElementById('thumb_mentorship') != null) {
  document.getElementById('thumb_mentorship').src = `${BASE_URL}rotated.webp?alt=media`;
}
if (document.getElementById('thumb_inn91') != null) {
  document.getElementById('thumb_inn91').src = `${BASE_URL}inn91.webp?alt=media`;
}
if (document.getElementById('thumb_mlnavigation') != null) {
  document.getElementById('thumb_mlnavigation').src = `${BASE_URL}mlnavigation.webp?alt=media`;
}
if (document.getElementById('thumb_liveslider') != null) {
  document.getElementById('thumb_liveslider').src = `${BASE_URL}liveslider.webp?alt=media`;
}

if (document.getElementById('thumb_portfolio') != null) {
  document.getElementById('thumb_portfolio').src = `${BASE_URL}portfolio.webp?alt=media`;
}



document.addEventListener('DOMContentLoaded', configureProjectDimensions, true);
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

    if (!isPortrait()) {
      let top = Math.abs((imgHeight - descHeight) / 2) + parseInt(headerStyle.height);
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
      if (menu.classList.contains("nav__link--active")) {
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
    if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});


