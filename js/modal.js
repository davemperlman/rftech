( function(){
	'use strict';
	$('.modal-activate').on('click', function() {
		$('.modal-wrap').show();
	});
	$('#close-modal').on('click', function() {
		$('.modal-wrap').hide();
	});

	$('.modal form > input').keyup(function(){
		var empty = false;
		$('.modal form > input, .modal form > textarea').each(function(){
			if ($(this).val() == '') {
				empty = true;
			}
		});
		if (empty) {
			$('#send').attr('disabled', 'disabled');
		}else{
			$('#send').removeAttr('disabled');
		}
	});

	$('#send').on('click', function(){
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();

		if ($('#send').attr('inactive') !== 'undefined') {
			console.log('stuff');
		}else{
			$('.modal #loading-img').show();
			$.ajax({
				url: 'send.php',
				type: "POST",
				cache: false,
				data: {email, subject, message},
				success: function(html) {
					$('.modal #loading-img').hide();
					$('#status').html(html);
					$('.modal-wrap').delay(1000).fadeOut();
				}
			});
		};
}());