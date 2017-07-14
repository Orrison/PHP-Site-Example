$(document).ready(function() {
	"use strict";
	/* Font Adjust Code */
	$('footer p#font').css('display', 'block');
	$('footer a.font').click(function(e) {
        e.preventDefault();
		var which = $(this).attr('title');
		if (which === "Small") {
			$('html').css('font-size', '50%');
		}
		else if (which === "Normal") {
			$('html').css('font-size', '62.5%');
		}
		else if (which === "Large") {
			$('html').css('font-size', '75%');
		}
    });
});