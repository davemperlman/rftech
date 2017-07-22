( function() {
	'use strict';

	var opaqueHeader = 100;

	function getCurrentScroll(){
		return window.pageYOffset || document.documentElement.scrollTop;
	}

	$('#nav-icon').click(function() {
		$('header nav').slideToggle('500ms', function() {
			$('#nav-icon').toggleClass('open');
		});
	});

	$(window).scroll(function() {
		var scroll = getCurrentScroll();
		if (scroll >= opaqueHeader) {
			$('header').addClass('colored');
		}else{
			$('header').removeClass('colored');
		}
	})
}())