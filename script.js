$(document).ready(function() {
	$('a.navigation').click(function(ev) {
		ev.preventDefault();

		$(".left-menu a").removeClass("active");

		var page = $(ev.target).closest("a").data("page");
		$(ev.target).closest("a").addClass("active");

		if ($(window).width() < 768) { 
			$(".left-menu").slideUp();
		}

		$(".content > .page:visible").slideUp();
		$(".content > #page-" + page).slideDown();

		if(page == "home" || page == "6") {
			$(".content-area").addClass("home");
		} else {
			$(".content-area").removeClass("home");
		}
	});

	$('.left-menu-toggle').click(function(ev) {
		ev.preventDefault();

		$(".left-menu").slideToggle();
	});

	$('.testimonials-slider').unslider({ 'arrows': false });
});