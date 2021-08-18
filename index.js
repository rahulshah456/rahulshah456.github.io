
//@ts-check

// Desktop Navbar State Changer
$("#navbar__desktop .nav-link").on("click", function(){
	$("#navbar__desktop").find(".active").removeClass("active");
	$(this).addClass("active");
});


// Mobile Navbar State Changer
$(".nav__mobile .nav__link").on("click", function(){
	$(".nav__mobile").find(".nav__link--active").removeClass("nav__link--active");
	$(this).addClass("nav__link--active");
});



$('.exp__card').on('mouseenter', function(){
	$(this).find('.exp__card-body').show(300, function() {
		console.log('show');
	});
}).on('mouseleave', function(){
	$(this).find('.exp__card-body').hide(300, function() {
		console.log('hide');
	});
})


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



let projectCards = document.querySelectorAll(".project__card");

projectCards.forEach( cards => {
	cards.addEventListener('mouseleave', () => {
    console.log("mouseleave");
		cards.getElementsByTagName('img')[0].style.filter = "blur(0px)";
    cards.getElementsByClassName('project_card--info')[0].style.width = "0%";
    if(cards.getElementsByClassName('project_card--desc')[0].style.display != "none") {
      cards.getElementsByClassName('project_card--desc')[0].style.display = "none";
    }
	});
	cards.addEventListener('mouseenter', () => {
    console.log("mouseenter");
		cards.getElementsByTagName('img')[0].style.filter = "blur(8px)";
    cards.getElementsByClassName('project_card--info')[0].style.width = "90%";
    setTimeout(function() {
      if(cards.getElementsByClassName('project_card--desc')[0].style.display != "flex") {
        cards.getElementsByClassName('project_card--desc')[0].style.display = "flex";
      }
    },300);
	});
});