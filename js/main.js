
function offscreen_reorder(){

	if (Modernizr.mq('(max-width: 600px)') && offscreenactive == false){
		$('#nav').insertBefore($('#off-screen-container'));
		$('#contact').insertBefore($('#off-screen-container'));
		offscreenactive = true;
	}

	if (Modernizr.mq('(min-width: 600px)') && offscreenactive == true){
		offscreenactive = false;
		$('#nav').insertAfter($('.off-screen-nav'));
		$('#contact').insertAfter($('#main'));
	}

}

$(document).ready(function(){

	window.offscreenactive = false;

	if (Modernizr.mq('(max-width: 600px)') && offscreenactive == false){
		offscreen_reorder();
	}

	$(window).resize(offscreen_reorder);

	$('.nav-button').click(function(e){
		e.preventDefault();
		$('body').removeClass('active-contact').toggleClass('active-nav');
	});

	$('.contact-button').click(function(e){
		e.preventDefault();
		$('body').removeClass('active-nav').toggleClass('active-contact');
	});

})
