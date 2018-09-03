$(document).ready(function(){

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	    anchor.addEventListener('click', function (e) {
	        e.preventDefault();

			$('.menu-popup').fadeOut();
			
	        document.querySelector(this.getAttribute('href')).scrollIntoView({
	            behavior: 'smooth'
	        });
	    });
	});

	$('.menu').click(function(){
		$('.menu-popup').fadeIn();
	});

	$('.menu-popup .fa-close').click(function(){
		$('.menu-popup').fadeOut();
	});
});
