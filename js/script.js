$(document).ready(function(){

	$('#aboutme-nav').click(function(){
		$('html, body').animate({
	     		scrollTop: $("#aboutme").offset().top
	    		}, 1000);
		$('#aboutme-nav').addClass("active");
		$('#objective-nav ,#education-nav , #courses-nav , #skills-nav , #projects-nav').removeClass("active");
	});

	$('#objective-nav').click(function(){
		$('html, body').animate({
	     		scrollTop: $("#objective").offset().top
	    		}, 1000);
		$('#objective-nav').addClass("active");
		$('#aboutme-nav ,#education-nav , #courses-nav , #skills-nav , #projects-nav').removeClass("active");
	});

	$('#education-nav').click(function(){
		$('html, body').animate({
	     		scrollTop: $("#education").offset().top
	    		}, 1000);
		$('#education-nav').addClass("active");
		$('#aboutme-nav , #objective-nav , #courses-nav , #skills-nav , #projects-nav').removeClass("active");
	});

	$('#courses-nav').click(function(){
		$('html, body').animate({
	     		scrollTop: $("#courses").offset().top
	    		}, 1000);
		$('#courses-nav ').addClass("active");
		$('#aboutme-nav , #objective-nav ,#education-nav , #skills-nav , #projects-nav').removeClass("active");
	});

	$('#skills-nav').click(function(){
		$('html, body').animate({
	     		scrollTop: $("#skills").offset().top
	    		}, 1000);
		$('#skills-nav').addClass("active");
		$('#aboutme-nav , #objective-nav ,#education-nav , #courses-nav , #projects-nav').removeClass("active");
	});

	$('#projects-nav').click(function(){
		$('html, body').animate({
	     		scrollTop: $("#projects").offset().top
	    		}, 1000);
		$('#projects-nav').addClass("active");
		$('#aboutme-nav , #objective-nav ,#education-nav , #courses-nav , #skills-nav').removeClass("active");
	});


});