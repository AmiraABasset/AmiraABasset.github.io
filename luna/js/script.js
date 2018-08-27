$(document).ready(function(){

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	    anchor.addEventListener('click', function (e) {
	        e.preventDefault();

			$('#menu').fadeOut();
			
	        document.querySelector(this.getAttribute('href')).scrollIntoView({
	            behavior: 'smooth'
	        });
	    });
	});

	$('.we_do .show_more').click(function(){
		$('.we_do .hidden').fadeIn();
	});
	 

	// $('.menu_bars').click(function(){
	// 	$('#menu').fadeIn();
	// });

	// $('#menu .close').click(function(){
	// 	$('#menu').fadeOut();
	// });



	// function checkClients(){
	// 	var leftArrow = $('.clients_say .fa-chevron-left'),
	// 		rightArrow =  $('.clients_say .fa-chevron-right');

	// $('.client:first').hasClass('active')?leftArrow.fadeOut():leftArrow.fadeIn();
	// $('.client:last').hasClass('active')?rightArrow.fadeOut():rightArrow.fadeIn();

	// }

	// checkClients();

	// $('.clients_say i').click(function(){

	// 	if($(this).hasClass('fa-chevron-right')){

	// 		$('.clients_say .active').fadeOut(100, function(){

	// 			$(this).removeClass('active').next('.client').addClass('active').fadeIn();
				
	// 			checkClients();
	// 		});
	// 	}
	// 	else{

	// 		$('.clients_say .active').fadeOut(100, function(){

	// 			$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
				
	// 			checkClients();
	// 		});			
	// 	}
	// });
});