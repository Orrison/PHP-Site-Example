$(document).ready(function(){
	"use strict";
	/* Lightbox Code */
	$('a.jsLightBox').click(function(e) {
		e.preventDefault();
		var posTop = $(window).scrollTop() + 25;
		var posTopOver = $(window).scrollTop();
		var lrg_img = $(this).attr('href');
		var title = $(this).attr('title');
		
		$('body').append('<div id="picOverlay"></div>')
		.append('<div id="picLightBox"><img src="' + lrg_img +'" /><br /><p class="caption">'+ title +'</p><br /><a href="" id="picLightClose">Close</a></div>');
		
		$('#picOverlay').css('overflow', 'hidden');
		$('#picLightBox').css('top', posTop + 'px');
		$('#picOverlay').css('top', posTopOver + 'px');
		$('#picOverlay').fadeTo(500, '.75', function(){
			$('#picLightBox').fadeTo(250, 1);
		});
		
		$('#picOverlay, #picLightBox, #picLightClose').click(function(e) {
			e.preventDefault();
			$('#picLightBox').fadeTo(100, 0, function() {
				$(this).remove();
				$('#picOverlay').fadeTo(250, 0, function(){
					$(this).remove();
					$('#picOverlay').css('overflow', 'visible');
				});
			});
		});
	});
	/* End Lightbox Code */
	
	/* Tabs Code */
	$('#tabs ul:first-child').css('display', 'block');
	$('hr').hide();
	$('#tabs').tabs();
	/* End Tabs Code */
});