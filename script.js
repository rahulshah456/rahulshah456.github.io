
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
	$(this).find('.exp__card-body').show(300, function() {
		console.log('show');
	});
}).on('mouseleave', function(){
	$(this).find('.exp__card-body').hide(300, function() {
		console.log('hide');
	});
})