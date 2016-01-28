$(document).ready(function() {
	var isMobile = false;

	if ($(window).width() < 860) { 
		isMobile = true;
	}

	$('a.navigation').click(function(ev) {
		ev.preventDefault();

		$(".left-menu a").removeClass("active");

		var page = $(ev.target).closest("a").data("page");
		$(ev.target).closest("a").addClass("active");

		if (isMobile) { 
			$(".left-menu").slideUp();
		}

		$(".content > .page:visible").slideUp();
		$(".content > #page-" + page).slideDown();
	});

	if(isMobile) {
		$(".left-menu").hide();

		$('.left-menu-toggle').click(function(ev) {
			ev.preventDefault();

			$(".left-menu").slideToggle();
		});
	}


});