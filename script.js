
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