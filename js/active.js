(function ($) {
	"use strict";
	jQuery(document).ready(function($){
// SlicNav JS Code
	$("#main-nav").slicknav({
		prependTo: '.mobile-menu-wrap',
		allowParentLinks: true
	});
	
// Owl Carousel code
	$(".slider-area").owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		nav:true,
		navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
		dots:false
	});
// Progress Bar code
	$("#web-design-skillbar").circleProgress({
		value: 0.9,
		size: 250,
		thickness: 6,
		fill: '#22babf'
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('.skill-count-no').html(Math.round(90 * progress) + '<i>%</i>');
	});
	
	$("#graphic-design-skillbar").circleProgress({
		value: 0.75,
		size: 250,
		thickness: 6,
		fill: '#22babf'
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('.skill-count-no').html(Math.round(75 * progress) + '<i>%</i>');
	});
	
	$("#digital-marketing-skillbar").circleProgress({
		value: 0.85,
		size: 250,
		thickness: 6,
		fill: '#22babf'
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('.skill-count-no').html(Math.round(85 * progress) + '<i>%</i>');
	});
// Team Owl Carousel code
	$(".team-list").owlCarousel({
		items:3,
		loop: true,
		autoplay: false,
		margin: 30,
		nav: false,
		dots: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
// Testimonials Carousel code
	$(".testimonial-list").owlCarousel({
		loop: true,
		autoplay: false,
		margin: 30,
		nav: false,
		dots: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
// LOgo Carousel code
	$(".logo-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		margin: 30,
		nav: false,
		dots: false,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});
// Isotope $ Masonry JS code
	$(".portfolio-filter li").on('click', function(){
		$(".portfolio-filter li").removeClass('active');
		$(this).addClass('active');
		
		var filterValue = $(this).attr("data-filter");
		$(".portfolio-list").isotope({
			filter:filterValue,
			layoutMode: 'masonry',
			 masonry: {
				 columnWidth: '.col-lg-3',
				 horizontalOrder: false
			 }
		});
	});	
});
	
	
	jQuery(window).load(function(){
			// Active Isotope Maronry
		jQuery(".portfolio-list").isotope({
			 layoutMode: 'masonry',
			 masonry: {
				 columnWidth: '.col-lg-3',
				 horizontalOrder: false
			 }
		});
	});
}(jQuery));
