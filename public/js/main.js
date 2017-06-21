$(document).ready(function(){
	// Hover to show info
	$("#roy-hover").hover(function(){
		$("#roy-cover").fadeIn();
	}, function(){
		$("#roy-cover").fadeOut("fast");
	});

	$("#xenia-hover").hover(function(){
		$("#xenia-cover").fadeIn();
	}, function(){
		$("#xenia-cover").fadeOut("fast");
	});

	$("#roy-hover").click(function(){
		tar = $(".center-container")
		if (tar.hasClass('toggle')) {
			tar.css('left', '50%');
			tar.removeClass('toggle');
			$("#roy-cover").fadeOut("fast");
		} else {
			tar.css('left', '100%');
			tar.addClass('toggle');
			$("#roy-cover").fadeOut("fast");
			$('.info').fadeIn("fast")
			displayInfo("roy");
		}
	});

	$("#xenia-hover").click(function(){
		tar = $(".center-container")
		if (tar.hasClass('toggle')) {
			tar.css('left', '50%');
			tar.removeClass('toggle');
			$("#xenia-cover").fadeOut("fast");
		} else {
			tar.css('left', 0);
			tar.addClass('toggle');
			$("#xenia-cover").fadeOut("fast");
		}
	});

	function displayInfo(person) {
		animeArgs = {easing: 'easeInOutQuad'}
		if (person=="roy"){
			animeArgs.left = '240px';
			animeArgs.targets = '.basic .info';
		}
		anime(animeArgs);
	}

	function hideInfo(person) {

	}
})