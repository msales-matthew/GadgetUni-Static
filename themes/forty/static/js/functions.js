//Remove Ad spaces on desktop
$(window).resize(function() {
	   if($(window).width() >= 1280) {
        $('.adSpace').remove();
    }else {

    	$('.adSpace').show();
    }
}).resize(); // This will simulate a resize to trigger the initial run.
