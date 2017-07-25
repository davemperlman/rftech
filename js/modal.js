( function(){
	'use strict';
	$('.modal-activate').on('click', function() {
		$('.modal-wrap').show();
	});
	$('#close-modal').on('click', function() {
		$('.modal-wrap').hide();
	});

	$('#send').on('click', function(){
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();

		$('.modal #loading-img').show();
		$.ajax({
			url: 'send.php',
			type: "POST",
			cache: false,
			data: {email, subject, message},
			success: function(html) {
				$('.modal #loading-img').hide();
				$('.modal form').hide();
				$('#status').html(html);
			}
		});
	});
}());