$(document).ready(function(){

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	    anchor.addEventListener('click', function (e) {
	        e.preventDefault();
			
	        document.querySelector(this.getAttribute('href')).scrollIntoView({
	            behavior: 'smooth'
	        });
	    });
	});

	$('a').hover(function(){
		$(this).attr('title','click to go !');
	});
	// Initialize AOS
	AOS.init({
		offset: 200,
      	duration: 600,
      	easing: 'ease-in-sine',
      	delay: 100,
	});

});
