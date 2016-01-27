$(document).ready(function() {
	$('.left-menu a').click(function(ev) {
		ev.preventDefault();

		$(".left-menu a").removeClass("active");

		var page = $(ev.target).closest("a").data("page");
		$(ev.target).closest("a").addClass("active");

		$(".content > .page:visible").slideUp();
		$(".content > #page-" + page).slideDown();
	});
});