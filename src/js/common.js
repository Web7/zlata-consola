(function (factory, jQuery, Zepto) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports === 'object' && typeof Meteor === 'undefined') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery || Zepto);
	}
}(function($){
	'use strict';

	$.fn.exists = function () {
		return this.length !== 0;
	};

	$(function(){
		var $ourProjectsSlick = $('.our-projects-slick');
		var $slickCarousel = $('.slick-carousel');
		var $houseLayoutSlick = $('.house-layout-slick');

		if ($ourProjectsSlick.exists()) {
			var $ourProjectsSlickArrows = $ourProjectsSlick.closest('section').find('.our-projects-slick-arrows');
			$ourProjectsSlick.slick({
				slidesToShow: 3,
				variableWidth: true,
				centerPadding: '40px',
				useCSS: false,
				appendArrows: $ourProjectsSlickArrows,
				prevArrow: '<button class="slick-prev slick-arrow btn-arrow" type="button">Previous</button>',
				nextArrow: '<button class="slick-next slick-arrow btn-arrow" type="button">Next</button>'
			});
		}

		if ($slickCarousel.exists()) {
			$slickCarousel.each(function() {
				var $this = $(this);
				var $slickArrowsContainer = $this.closest('section').find('.slick-arrows-container');
				$this.slick({
					slidesToShow: 3,
					variableWidth: true,
					centerPadding: '40px',
					useCSS: false,
					appendArrows: $slickArrowsContainer,
					prevArrow: '<button class="slick-prev slick-arrow btn-arrow" type="button">Previous</button>',
					nextArrow: '<button class="slick-next slick-arrow btn-arrow" type="button">Next</button>',
					responsive: [
						{
							breakpoint: 540,
							slidesToShow: 1,
							centerPadding: '20px'
						},{
							breakpoint: 720,
							slidesToShow: 2,
							centerPadding: '20px'
						},
					]
				});
			});

		}

		if ($houseLayoutSlick.exists()) {
			$houseLayoutSlick.each(function() {
				var $this = $(this);
				var $accordionBody = $this.closest('.accordion-body');
				var $slickArrowsContainer = $accordionBody.find('.slick-arrows-container');
				$this.slick({
					slidesToShow: 9,
					variableWidth: true,
					centerPadding: '14px',
					useCSS: false,
					appendArrows: $slickArrowsContainer,
					prevArrow: '<button class="slick-prev slick-arrow btn-arrow" type="button">Previous</button>',
					nextArrow: '<button class="slick-next slick-arrow btn-arrow" type="button">Next</button>'
				})
			});
		}
	});

}, window.jQuery, window.Zepto));