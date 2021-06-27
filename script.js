
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


//$('skills_box').height($('skills_box').width());

$('.exp__card').on('mouseenter', function(){
	$(this).find('.exp__card-body').toggle();
}).on('mouseleave', function(){
	$(this).find('.exp__card-body').toggle();
})

let mouseCursor = $(".cursor");
let navLinks = document.querySelectorAll(".nav-link");
let resumeImage = $(".resume");


var zoom = 0.4;
var isZoomVisible = false;
resumeImage.css('filter', 'grayscale(100%) blur(5px)')

window.addEventListener('mousemove', e => {
	cursor(e);
	moveMagnifier(e)
});

function cursor(e) {
	mouseCursor.css("top", e.pageY + "px");
	mouseCursor.css("left", e.pageX + "px");
}


navLinks.forEach( link => {
	link.addEventListener('mouseout', () => {
		mouseCursor.removeClass("link-grow");
		mouseCursor.css('background-color', 'transparent');
	});
	link.addEventListener('mouseover', () => {
		mouseCursor.addClass("link-grow");
		mouseCursor.css('background-color', 'black');
	});
});



resumeImage.on('mouseover', (e) => {
	mouseCursor.addClass("link-grow-large");
	resumeImage.css('filter', 'blur(2px) grayscale(0%)')
	magnify();
	moveMagnifier(e);
});

resumeImage.on('mouseout', (e) => {
	mouseCursor.removeClass("link-grow-large");
	resumeImage.css('filter', 'grayscale(100%) blur(5px)')
	removeMagnify()
});




function removeMagnify() {
	isZoomVisible = false;
	mouseCursor.css('background-image', 'none')
	mouseCursor.css('background-size', '100%');
}

function magnify() {
	/* Set background properties for the magnifier glass: */
	isZoomVisible = true;
	mouseCursor.css('background-image', "url('" + resumeImage.attr('src') + "')")
	mouseCursor.css('background-repeat', "no-repeat")
	mouseCursor.css('background-size', (resumeImage.width() * zoom) + "px " 
	+ (resumeImage.height() * zoom) + "px");
}

function moveMagnifier(e) {
	
	if(!isZoomVisible) return;

    var pos, x, y;
	var  w, h, bw;

	bw = 3;
  	w = mouseCursor.outerWidth() / 2;
  	h = mouseCursor.outerHeight() / 2;

    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > resumeImage.width() - (w / zoom)) {x = resumeImage.width() - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > resumeImage.height() - (h / zoom)) {y = resumeImage.height() - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    
    /* Display what the magnifier glass "sees": */
	mouseCursor.css('background-position', 
				"-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px");
  }

function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = resumeImage[0].getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
}